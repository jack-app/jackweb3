import { TopScreen } from "@/screens/Top";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { ProductionDetailProps as ProductionProps } from "@/ui/Production";
import createImage from "@/utils/createImage";
import createOGPImage from "@/utils/createOGPImage";
import { getDatabase } from "@/utils/notion";
import products from "./products";

export default function Home({
  articles,
  article,
  product,
}: {
  articles: ArticleItemProps[];
  article: ArticleItemProps;
  product: ProductionProps;
}) {
  return <TopScreen articles={articles} article={article} product={product} />;
}

export const getStaticProps = async () => {
  const productsDatabaseId = process.env.NOTION_PRODUCTS_DATABASE_ID;
  const productDb = await getDatabase(productsDatabaseId);
  const products = await Promise.all(
    productDb.map(async (product: any) => {
      const arrayDetail = product.properties.Detail.rich_text;
      const arrayDescription = product.properties.Description.rich_text;
      const arrayRelease = product.properties.ReleaseDate
        ? product.properties.ReleaseDate.rich_text
        : null;
      const res = {
        id: product.id,
        image: "",
        title: product.properties.Name.title[0]?.plain_text || null,
        text: product.properties.Description.rich_text[0]?.plain_text || null,
        description: arrayDescription || null,
        detail: arrayDetail || null,
        release_date: arrayRelease || null,
        tags: product.properties.Tag.multi_select.map((tag: any) => tag.name),
        git_href: product.properties.GitHub.url || null,
        web_href: product.properties.WebLink.url || null,
        app_href: product.properties.AppStore.url || null,
        google_href: product.properties.GooglePlayStore.url || null,
      } as ProductionProps;
      // 画像処理
      if (product.properties.Image.files && product.properties.Image.files.length > 0) {
        if (product.properties.Image.files[0].file?.url) {
          if (!product.cover) {
            res.image = await createImage(
              product.id,
              "cover",
              product.properties.Image.files[0].file.url,
            );
          } else if (product.cover.type === "file") {
            res.image = await createImage(product.id, "cover", product.cover.file.url);
          } else if (product.cover.type === "external") {
            res.image = product.cover.external.url;
          }
        }
      } else {
        // デフォルト画像の処理
        res.image = "/orang.jpg";
      }

      return res;
    }),
  );

  //productsからランダムで一つ表示させる
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const tmp = Math.floor(Math.random() * (i + 1));
      [array[i], array[tmp]] = [array[tmp], array[i]];
    }
    return array;
  };
  const shuffledProducts = shuffleArray(products);
  const filteredProduct = shuffledProducts[0];

  const blogDatabaseId = process.env.NOTION_BLOG_DATABASE_ID;
  const articleDb = await getDatabase(blogDatabaseId);

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

  // blogを二つ取得する
  const filteredArticles = articles.slice(0, 2);

  //blogを一つ表示する
  const filteredArticle = articles[0];

  return {
    props: {
      product: filteredProduct,
      articles: filteredArticles,
      article: filteredArticle,
    },
    revalidate: 10,
  };
};
