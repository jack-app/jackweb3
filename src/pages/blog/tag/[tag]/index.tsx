import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BlogScreen } from "@/screens/Blog";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Meta } from "@/utils/meta";
import { getDatabase } from "@/utils/notion";
import { getArticles } from "@/utils/useGetArticles";

// <<<<<<< HEAD
export default function TagPage({ articles }: { articles: ArticleItemProps[] }) {
  const router = useRouter();
  const { tag } = router.query;
  const [headingText, setHeadingText] = useState<string>("記事一覧");

  useEffect(() => {
    if (typeof tag === "string") {
      setHeadingText(`${tag}に関する記事`);
    }
  }, [tag]);
  return <BlogScreen articles={articles} headingText={headingText} />;
  // =======
  // export default function TagPage({ tag, articles }: { tag: string; articles: ArticleItemProps[] }) {
  //   return (
  //     <>
  //       <Meta title={`${tag}に関する記事一覧`} />
  //       <BlogScreen articles={articles} />
  //     </>
  //   );
  // >>>>>>> 7e5a56560650c16f088935fec71455378102fb21
}

export async function getStaticPaths() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);

  const tags = new Set<string>();
  articleDb.forEach((article: any) => {
    article.properties.tag.multi_select.forEach((tag: any) => {
      tags.add(tag.name);
    });
  });

  const paths = Array.from(tags).map((tag) => ({
    params: { tag: tag },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { tag: string } }) {
  const tag = params.tag;
  const articles = await getArticles(tag);

  return {
    props: {
      tag,
      articles,
    },
  };
}
