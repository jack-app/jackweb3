import "@/styles/globals.scss";
import Head from "next/head";
import { FloatingBanner } from "@/ui/FloatingBanner";
import { Footer } from "@/ui/Footer";
import { Header } from "@/ui/Header";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="inner-body">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="Header">
        <Header />
      </div>
      <div className="dummy-header"></div>
      <Component {...pageProps} />
      {/* <FloatingBanner /> */}
      <Footer />
    </div>
  );
}
