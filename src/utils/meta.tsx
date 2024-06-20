import Head from "next/head";
import React from "react";

type Props = {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  siteName?: string;
  twitterCard?: string;
  twitterSite?: string;
  canonicalUrl?: string;
  lang?: string;
  isHomePage?: boolean;
  pageType?: string;
};

export const Meta: React.FC<Props> = ({
  title = "アプリ開発団体jack",
  description = "アプリ開発団体jackは、名古屋の学生によるアプリ開発団体です。Webアプリやモバイルアプリ、ゲームなどの作成を中心に活動しています。",
  ogImage = "/default-ogp.png",
  ogUrl = "https://www.jackapp.jp/",
  siteName = "アプリ開発団体jack",
  twitterCard = "summary_large_image",
  twitterSite = "@jackapp_tmy",
  canonicalUrl = "https://www.jackapp.jp/",
  lang = "ja_JP",
  isHomePage = false,
  pageType = "website",
}: Props) => {
  const pageTitle = isHomePage ? siteName : `${title} | ${siteName}`; // 修正
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={lang} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />

      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};
