import crypto from "crypto";
import fs from "fs/promises";
import path from "path";
import { Client } from "@notionhq/client";

const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

const NOTION_REQUEST_INTERVAL_MS = 350;
const MAX_RETRY_COUNT = 5;
const BUILD_CACHE_DIR = path.join(process.cwd(), ".next/cache/notion-build");
const RATE_LIMIT_DIR = path.join(
  process.cwd(),
  ".next/cache/notion-rate-limit",
);
const RATE_LIMIT_LOCK_DIR = `${RATE_LIMIT_DIR}.lock`;
const RATE_LIMIT_STATE_FILE = path.join(RATE_LIMIT_DIR, "state.json");
const databaseCache = new Map<string, Promise<any[]>>();

let lastLocalRequestStartedAt = 0;
let requestQueue = Promise.resolve();

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const isProductionBuild = () =>
  process.env.NODE_ENV === "production" &&
  process.env.npm_lifecycle_event === "build";

const shouldUseBuildCache = () => isProductionBuild();

const getRequiredDatabaseId = (databaseId: string | undefined) => {
  if (!databaseId) {
    throw new Error("Notion database id is not set.");
  }
  return databaseId;
};

const getDatabaseCacheFile = (databaseId: string) => {
  const cacheKey = crypto.createHash("sha256").update(databaseId).digest("hex");
  return path.join(BUILD_CACHE_DIR, `${cacheKey}.json`);
};

const readJsonIfExists = async <T>(filePath: string): Promise<T | null> => {
  try {
    const json = await fs.readFile(filePath, "utf8");
    return JSON.parse(json) as T;
  } catch (error: any) {
    if (error?.code === "ENOENT") return null;
    throw error;
  }
};

const getRetryAfterMs = (error: any) => {
  const retryAfter =
    error?.headers?.get?.("retry-after") ??
    error?.headers?.get?.("Retry-After") ??
    error?.headers?.["retry-after"] ??
    error?.headers?.["Retry-After"];

  const retryAfterSeconds = Number(retryAfter);
  if (Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0) {
    return retryAfterSeconds * 1000;
  }

  return null;
};

const isRateLimited = (error: any) =>
  error?.code === "rate_limited" || error?.status === 429;

const acquireFileLock = async (lockDir: string, timeoutMs: number) => {
  await fs.mkdir(path.dirname(lockDir), { recursive: true });

  const startedAt = Date.now();
  while (true) {
    try {
      await fs.mkdir(lockDir);
      return;
    } catch (error: any) {
      if (error?.code !== "EEXIST") throw error;

      if (Date.now() - startedAt > timeoutMs) {
        await fs.rm(lockDir, { recursive: true, force: true });
        continue;
      }

      await wait(50);
    }
  }
};

const waitForSharedRateLimitSlot = async () => {
  await acquireFileLock(RATE_LIMIT_LOCK_DIR, 30 * 1000);

  let waitMs = 0;
  try {
    await fs.mkdir(RATE_LIMIT_DIR, { recursive: true });
    const state = await readJsonIfExists<{ nextRequestAt: number }>(
      RATE_LIMIT_STATE_FILE,
    );
    const now = Date.now();
    const nextRequestAt = Math.max(now, state?.nextRequestAt ?? 0);
    waitMs = Math.max(0, nextRequestAt - now);

    const tempFile = `${RATE_LIMIT_STATE_FILE}.${process.pid}.tmp`;
    await fs.writeFile(
      tempFile,
      JSON.stringify({
        nextRequestAt: nextRequestAt + NOTION_REQUEST_INTERVAL_MS,
      }),
      "utf8",
    );
    await fs.rename(tempFile, RATE_LIMIT_STATE_FILE);
  } finally {
    await fs.rm(RATE_LIMIT_LOCK_DIR, { recursive: true, force: true });
  }

  if (waitMs > 0) {
    await wait(waitMs);
  }
};

const waitForLocalRateLimitSlot = async () => {
  const elapsed = Date.now() - lastLocalRequestStartedAt;
  if (elapsed < NOTION_REQUEST_INTERVAL_MS) {
    await wait(NOTION_REQUEST_INTERVAL_MS - elapsed);
  }

  lastLocalRequestStartedAt = Date.now();
};

const waitForRateLimitSlot = async () => {
  if (isProductionBuild()) {
    await waitForSharedRateLimitSlot();
    return;
  }

  await waitForLocalRateLimitSlot();
};

const runWithRetry = async <T>(request: () => Promise<T>): Promise<T> => {
  let attempt = 0;

  while (true) {
    try {
      await waitForRateLimitSlot();
      return await request();
    } catch (error) {
      if (!isRateLimited(error) || attempt >= MAX_RETRY_COUNT) {
        throw error;
      }

      const retryAfterMs = getRetryAfterMs(error) ?? 1000 * 2 ** attempt;
      await wait(retryAfterMs);
      attempt += 1;
    }
  }
};

const runNotionRequest = async <T>(request: () => Promise<T>) => {
  const queuedRequest = requestQueue.then(() => runWithRetry(request));

  requestQueue = queuedRequest.then(
    () => undefined,
    () => undefined,
  );

  return queuedRequest;
};

const fetchDatabase = async (databaseId: string) => {
  let results: any[] = [];
  let cursor: string | undefined = undefined;

  do {
    const response = await runNotionRequest(() =>
      notionClient.databases.query({
        database_id: databaseId,
        page_size: 100,
        start_cursor: cursor,
      }),
    );

    results.push(...response.results);
    cursor = response.has_more ? response.next_cursor ?? undefined : undefined;
  } while (cursor);

  return results;
};

const getDatabaseWithBuildCache = async (databaseId: string) => {
  const cacheFile = getDatabaseCacheFile(databaseId);
  const lockDir = `${cacheFile}.lock`;
  const existingCache = await readJsonIfExists<any[]>(cacheFile);
  if (existingCache) return existingCache;

  await fs.mkdir(BUILD_CACHE_DIR, { recursive: true });
  await acquireFileLock(lockDir, 10 * 60 * 1000);

  try {
    const cache = await readJsonIfExists<any[]>(cacheFile);
    if (cache) return cache;

    const results = await fetchDatabase(databaseId);
    const tempFile = `${cacheFile}.${process.pid}.tmp`;
    await fs.writeFile(tempFile, JSON.stringify(results), "utf8");
    await fs.rename(tempFile, cacheFile);
    return results;
  } finally {
    await fs.rm(lockDir, { recursive: true, force: true });
  }
};

export const getDatabase = async (databaseId: string | undefined) => {
  const requiredDatabaseId = getRequiredDatabaseId(databaseId);

  if (!shouldUseBuildCache()) {
    return fetchDatabase(requiredDatabaseId);
  }

  const cachedPromise = databaseCache.get(requiredDatabaseId);
  if (cachedPromise) return cachedPromise;

  const databasePromise = getDatabaseWithBuildCache(requiredDatabaseId);
  databaseCache.set(requiredDatabaseId, databasePromise);

  try {
    return await databasePromise;
  } catch (error) {
    databaseCache.delete(requiredDatabaseId);
    throw error;
  }
};

export const getPage = async (pageId: string) => {
  const response = await runNotionRequest(() =>
    notionClient.pages.retrieve({
      page_id: pageId,
    }),
  );

  return response;
};

const listBlockChildren = async (blockId: string) => {
  let results: any[] = [];
  let cursor: string | undefined = undefined;

  do {
    const response = await runNotionRequest(() =>
      notionClient.blocks.children.list({
        block_id: blockId,
        page_size: 100,
        start_cursor: cursor,
      }),
    );

    results.push(...response.results);
    cursor = response.has_more ? response.next_cursor ?? undefined : undefined;
  } while (cursor);

  return results;
};

// TODO: add types
export const getBlocks = async (blockId: string) => {
  blockId = blockId.replaceAll("-", "");

  const results = await listBlockChildren(blockId);

  // get nested blocks
  const childBlocks: any = results.map(async (block: any) => {
    if (block.has_children) {
      const children = await getBlocks(block.id);
      return { ...block, children };
    }
    return block;
  });

  return await Promise.all(childBlocks).then((blocks) => {
    return blocks.reduce((acc, curr) => {
      if (curr.type === "bulleted_list_item") {
        if (acc[acc.length - 1]?.type === "bulleted_list") {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "bulleted_list",
            bulleted_list: { children: [curr] },
          });
        }
      } else if (curr.type === "numbered_list_item") {
        if (acc[acc.length - 1]?.type === "numbered_list") {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "numbered_list",
            numbered_list: { children: [curr] },
          });
        }
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
  });
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
