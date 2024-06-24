import { BlogScreen } from "@/screens/Blog";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Meta } from "@/utils/meta";
import { getDatabase } from "@/utils/notion";
import { getArticles } from "@/utils/useGetArticles";

export default function TagPage({ tag, articles }: { tag: string; articles: ArticleItemProps[] }) {
  const headingText = `${tag}に関する記事`;
  return (
    <>
      <Meta title={headingText} />
      <BlogScreen articles={articles} headingText={headingText} />
    </>
  );
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
