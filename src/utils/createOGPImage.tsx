import fs from "fs";
import satori from "satori";
import sharp from "sharp";

// ogp画像を動的に生成。
// Next.jsのデフォルトでサポートされているが、edgeランタイムで使用するとエラーになるため、satoriを使用。
const createOGPImage = async function (id: string, title: string, writerName: string) {
  const regularFont = fs.readFileSync("public/ZenKakuGothicNew-Regular.ttf");
  const boldFont = fs.readFileSync("public/ZenKakuGothicNew-Bold.ttf");

  const path = `public/${id}/`;
  const cover = `${path}ogp.png`;
  const result = `/${id}/ogp.png`;

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }

  if (fs.existsSync(cover)) return result;

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
          gap: "16px",
          backgroundColor: "#FFFCF2",
          color: "#484335",
          width: "90%",
          height: "85%",
          padding: "32px 64px",
        }}
      >
        <div style={{ display: "flex", fontSize: "48px", fontWeight: 700 }}>{title}</div>
        <div style={{ display: "flex", fontSize: "32px" }}>@{writerName}</div>
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
    }
  );

  // ogp画像ではsvgが使えないため、pngに変換する。
  const pngData = await sharp(Buffer.from(svg)).png().toBuffer();
  fs.writeFileSync(cover, pngData);
  return result;
};

export default createOGPImage;
