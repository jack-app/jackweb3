import "@/styles/globals.scss";
import Head from "next/head";
import { Footer } from "@/ui/Footer";
import { Header } from "@/ui/Header";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="Header">
        <Header />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
