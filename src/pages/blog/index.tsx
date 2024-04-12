import { BlogScreen } from "@/screens/Blog";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import createImage from "@/utils/createImage";
import createOGPImage from "@/utils/createOGPImage";
import { getDatabase } from "@/utils/notion";

export default function Blog({ articles }: { articles: ArticleItemProps[] }) {
  return <BlogScreen articles={articles} />;
}

export async function getStaticProps() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);

  const currentDate = new Date().toISOString().slice(0, 10);

  const articles = await Promise.all(
    articleDb
      .filter((article: any) => {
        if (
          article.properties.Publish_Date.date &&
          article.properties.Publish_Date.date.start > currentDate
        )
          return false;

        const isPublished = article.properties.Publish.checkbox === true;
        return isPublished;
      })
      .map(async (article: any) => {
        let res = {
          id: article.id,
          image: null,
          title: article.properties.Name.title[0].plain_text,
          tags: article.properties.tag.multi_select,
          date: article.properties.Publish_Date.date
            ? article.properties.Publish_Date.date.start
            : article.created_time.slice(0, 10),
        } as ArticleItemProps;

        if (!article.cover) {
          res.image = await createOGPImage(
            article.id,
            article.properties.Name.title[0].plain_text,
            article.properties.Writer.created_by.name,
          );
        } else if (article.cover.type === "file") {
          // カバー画像のtypeがfileの場合、有効期限があるのでbufferに変換する
          res.image = await createImage(article.id, "cover", article.cover.file.url);
        } else if (article.cover.type === "external") {
          res.image = article.cover.external.url;
        }

        return res;
      }),
  );

  return {
    props: {
      articles,
    },
  };
}
