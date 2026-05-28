import { Client } from "@notionhq/client";

const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
  // タイムアウトを60秒に設定
  // 大量の静的ページ（SSG）ビルド時に、Notion APIのレートリミット（429エラー）や
  // 応答遅延によるビルド失敗を防ぐため、SDK内蔵の自動リトライ機能を有効化しています。
  timeoutMs: 60_000,
});

export const getDatabase = async (databaseId: string) => {
  let results: any[] = [];
  let cursor: string | undefined = undefined;

  do {
    const response = await notionClient.databases.query({
      database_id: databaseId,
      page_size: 100,
      start_cursor: cursor,
    });

    results.push(...response.results);
    cursor = response.has_more ? response.next_cursor ?? undefined : undefined;
  } while (cursor);

  return results;
};

export const getPage = async (pageId: string) => {
  const response = await notionClient.pages.retrieve({
    page_id: pageId,
  });

  return response;
};

// TODO: add types
export const getBlocks = async (blockId: string) => {
  blockId = blockId.replaceAll("-", "");

  const { results } = await notionClient.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  });

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
