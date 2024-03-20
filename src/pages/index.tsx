import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1>Home</h1>
        <div>日本語の文字ですよろしく。</div>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </main>
    </>
  );
}
