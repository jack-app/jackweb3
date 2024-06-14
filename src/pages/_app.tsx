import "@/styles/globals.scss";
import { Footer } from "@/ui/Footer";
import { Header } from "@/ui/Header";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="Header">
        <Header />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
