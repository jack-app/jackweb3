import { BlogScreen } from "@/screens/Blog";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { TagType } from "@/ui/Tag";
import { getDatabase } from "@/utils/notion";
import { getArticles } from "@/utils/useGetArticles";

export default function Blog({
  articles,
  tags,
}: {
  articles: ArticleItemProps[];
  tags: TagType[];
}) {
  return <BlogScreen articles={articles} tags={tags} />;
}

export async function getStaticProps() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);
  const articles = await getArticles();

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

  console.log("tags:", tags);

  return {
    props: {
      articles,
      tags,
    },
  };
}
