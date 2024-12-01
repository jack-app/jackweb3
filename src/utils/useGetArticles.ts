import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import createImage from "@/utils/createImage";
import createOGPImage from "@/utils/createOGPImage";
import { getDatabase } from "@/utils/notion";

/*
公開中の全ての記事を取得する関数
tag名、writer名を指定すると、その条件に合致する記事を取得する
**/
type UseGetArticles = (tagParam?: string, writerParam?: string) => Promise<ArticleItemProps[]>;

export const getArticles: UseGetArticles = async (tagParam?: string, writerParam?: string) => {
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

        if (!article.properties.Name.title[0]) return false; // タイトルがない記事は除外

        const isPublished = article.properties.Publish.checkbox === true;
        const hasTag = article.properties.tag.multi_select.some((tag: any) => {
          return tag.name === tagParam;
        });
        const hasWriter = writerParam
          ? article.properties.Writer &&
            article.properties.Writer.created_by &&
            article.properties.Writer.created_by.name === writerParam
          : true;
        if (tagParam) return isPublished && hasTag;
        if (writerParam) return isPublished && hasWriter;
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
          res.image = `/${article.id}/ogp.png`;
        } else if (article.cover.type === "file") {
          // カバー画像のtypeがfileの場合、有効期限があるのでbufferに変換する
          res.image = await createImage(article.id, "cover", article.cover.file.url);
        } else if (article.cover.type === "external") {
          res.image = article.cover.external.url;
        }

        return res;
      }),
  );

  const results = articles.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });

  return results as ArticleItemProps[];
};
