import fs from "fs";
import satori from "satori";
import sharp from "sharp";

// ogp画像を動的に生成。
// Next.jsのデフォルトでサポートされているが、edgeランタイムで使用するとエラーになるため、satoriを使用。
const createOGPImage = async function (
  id: string,
  title: string,
  writerName: string,
  lastEditTime: string,
) {
  const path = `public/${id}/`;
  const cover = `${path}ogp.png`;
  const result = `/${id}/ogp.png`;

  try {
    const regularFont = fs.readFileSync("public/ZenKakuGothicNew-Regular.ttf");
    const boldFont = fs.readFileSync("public/ZenKakuGothicNew-Bold.ttf");

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }

    if (fs.existsSync(cover)) {
      const stats = fs.statSync(cover);
      const fileUpdateTime = new Date(stats.mtime).getTime();
      const notionUpdateTime = new Date(lastEditTime).getTime();

      // ファイルの更新時間よりも、Notionの更新時間の方が新しい場合のみ、以降の生成処理に進む
      if (fileUpdateTime > notionUpdateTime) {
        return result;
      }
    }

    const svg = await satori(
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(90deg, #FFC121, #FF5E2C)",
          fontFamily: "Zen Kaku Gothic New",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            gap: "24px",
            backgroundColor: "#FFFCF2",
            color: "#484335",
            width: "90%",
            height: "85%",
            padding: "32px 64px",
          }}
        >
          <div style={{ display: "flex", fontSize: "48px", fontWeight: 700 }}>{title}</div>
          <div style={{ display: "flex", fontSize: "40px", fontWeight: 400 }}>@{writerName}</div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Zen Kaku Gothic New",
            data: regularFont,
            weight: 400,
            style: "normal",
          },
          {
            name: "Zen Kaku Gothic New",
            data: boldFont,
            weight: 700,
            style: "normal",
          },
        ],
      },
    );

    // ogp画像ではsvgが使えないため、pngに変換する。
    const pngData = await sharp(Buffer.from(svg)).png().toBuffer();
    fs.writeFileSync(cover, pngData);
    return result;
  } catch (error) {
    // fallback: 'blocking' によりリクエスト時(サーバーレス環境)で実行された場合、
    // public/ 配下のフォント読み込みや画像書き込みに失敗する。
    // その場合はビルド時に生成済みの画像パスをそのまま返す(CDNから配信される)。
    console.warn(`createOGPImage: OGP画像を生成できなかったため既存パスを返します (${id})`, error);
    return result;
  }
};

export default createOGPImage;
