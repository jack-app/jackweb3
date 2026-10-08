import fs from "fs/promises";
import path from "path";

const cacheDir = path.join(process.cwd(), ".next/cache/notion-build");

await fs.rm(cacheDir, { recursive: true, force: true });
