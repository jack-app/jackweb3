import fs from "fs";
import sharp from "sharp";

export const cacheRemoteAvatar = async (id: string, url: string) => {
  if (!url) return null;

  const dirPath = `public/avatars/${id}`;
  const filePath = `${dirPath}/icon.webp`;
  const publicPath = `/avatars/${id}/icon.webp`;

  if (fs.existsSync(filePath)) return publicPath;

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
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
