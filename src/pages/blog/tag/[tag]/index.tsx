import { BlogScreen } from "@/screens/Blog";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { TagType } from "@/ui/Tag";
import { getBlocks, getDatabase, getPage } from "@/utils/notion";
import { getArticles } from "@/utils/useGetArticles";

export default function TagPage({
  articles,
  tags,
}: {
  articles: ArticleItemProps[];
  tags: TagType[];
}) {
  return <BlogScreen articles={articles} tags={tags} />;
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
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);
  const articles = await getArticles(params.tag);

  //タグ一覧の取得
  const tagsList = new Set<string>();
  const tags: TagType[] = [];

  articleDb.forEach((article: any) => {
    article.properties.tag.multi_select.forEach((tag: any) => {
      if (!tagsList.has(tag.name)) {
        tagsList.add(tag.name);
        tags.push({
          id: tag.id,
          name: tag.name,
          color: tag.color,
        });
      }
    });
  });

  return {
    props: {
      articles,
      tags,
    },
  };
}
