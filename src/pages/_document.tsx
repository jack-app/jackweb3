import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <Html lang="ja">
      <Head>
        <link rel="icon" href={`${baseUrl}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${baseUrl}/apple-touch-icon.png`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
