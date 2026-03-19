import { createHash } from "crypto";
import fs from "fs";
import sharp from "sharp";

export const cacheRemoteAvatar = async (id: string, url: string) => {
  if (!url) return null;

  const dirPath = `public/avatars/${id}`;
  const baseUrl = url.split("?")[0];
  const hashedUrl = createHash("sha256").update(baseUrl).digest("hex").slice(0, 16);
  const fileName = `${hashedUrl}.webp`;
  const filePath = `${dirPath}/${fileName}`;
  const publicPath = `/avatars/${id}/${fileName}`;

  if (fs.existsSync(filePath)) return publicPath;

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // 古い画像は削除する
  const oldFiles = fs.readdirSync(dirPath).filter((name) => name !== fileName);
  for (const oldFile of oldFiles) {
    fs.rmSync(`${dirPath}/${oldFile}`, { force: true });
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error("Fetch failed");
  const buffer = Buffer.from(await response.arrayBuffer());

  await sharp(buffer)
    .rotate()
    .resize(120, 120, { fit: "cover", kernel: sharp.kernel.lanczos3 })
    .sharpen()
    .webp({ quality: 100, lossless: true })
    .toFile(filePath);

  return publicPath;
};
