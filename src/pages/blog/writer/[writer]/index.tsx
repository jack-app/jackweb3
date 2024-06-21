import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BlogScreen } from "@/screens/Blog";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { getDatabase } from "@/utils/notion";
import { getArticles } from "@/utils/useGetArticles";

export default function WriterPage({ articles }: { articles: ArticleItemProps[] }) {
  const router = useRouter();
  const { writer } = router.query;
  const [headingText, setHeadingText] = useState<string>("記事一覧");

  useEffect(() => {
    if (typeof writer === "string") {
      setHeadingText(`${decodeURIComponent(writer)}による記事`);
    }
  }, [writer]);
  return <BlogScreen articles={articles} headingText={headingText} />;
}

export async function getStaticPaths() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);

  const writers = new Set<string>();
  articleDb.forEach((article: any) => {
    if (
      article.properties.Writer &&
      article.properties.Writer.created_by &&
      article.properties.Writer.created_by.name
    ) {
      writers.add(article.properties.Writer.created_by.name);
    }
  });

  const paths = Array.from(writers).map((writer) => ({
    params: { writer: encodeURIComponent(writer) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { writer: string } }) {
  const articles = await getArticles(undefined, decodeURIComponent(params.writer));

  return {
    props: {
      articles,
    },
  };
}
