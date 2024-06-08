import { BlogScreen } from "@/screens/Blog";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { getDatabase } from "@/utils/notion";
import { getArticles } from "@/utils/useGetArticles";

export default function TagPage({ articles }: { articles: ArticleItemProps[] }) {
  return <BlogScreen articles={articles} />;
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
  const articles = await getArticles(params.tag);

  return {
    props: {
      articles,
    },
  };
}
