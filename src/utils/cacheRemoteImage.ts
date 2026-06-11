import fs from "fs";
import sharp from "sharp";

const cacheRemoteImage = async function (id: string, name: string, url: string) {
  // Notionの画像は期限付きのURLなので、そのまま表示すると期限切れで表示できなくなる
  // 期限付きの画像をコピーしてpublicディレクトリに保存する
  // 参考: https://github.com/0si43/shetommy.com/pull/36/files

  const path = `public/${id}/`;
  //拡張子を .webpに変更
  const cover = `${path}/${name}.webp`;

  try {
    // 既にファイルが存在すれば再取得しない
    if (fs.existsSync(cover)) {
      const metadata = await sharp(cover).rotate().metadata();
      return {
        url: `/${id}/${name}.webp`,
        width: metadata.width,
        height: metadata.height,
      };
    }

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }

    const src = await fetch(url).then((r) => r.blob());
    const binary = await src.arrayBuffer();
    const buffer = Buffer.from(binary);

    //Sharpによる画像処理
    const output = await sharp(buffer)
      .rotate()
      .resize(1200, null, { withoutEnlargement: true, fit: "inside" })
      .webp({ quality: 80 })
      .toFile(cover);

    return {
      url: `/${id}/${name}.webp`,
      width: output.width,
      height: output.height,
    };
  } catch (error) {
    // fallback: 'blocking' によりリクエスト時(サーバーレス環境)で実行された場合、
    // public/ は読み取り専用のため書き込みに失敗する。
    // その場合はキャッシュを諦め、Notionの元URLをそのまま返してページ生成を継続する。
    // (revalidate間隔をNotionのURL有効期限とおおよそ揃えているため、表示は維持される)
    console.warn(
      `cacheRemoteImage: 画像をキャッシュできなかったため元URLを使用します (${id}/${name})`,
      error,
    );
    return {
      url,
      width: undefined,
      height: undefined,
    };
  }
};

export default cacheRemoteImage;
