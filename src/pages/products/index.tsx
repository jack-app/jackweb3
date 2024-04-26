import { ProductsScreen } from "@/screens/Products";
import { Props as ProductionProps } from "@/ui/Production";
import createImage from "@/utils/createImage";
import createOGPImage from "@/utils/createOGPImage";
import { getDatabase } from "@/utils/notion";

export default function Products({ products }: { products: ProductionProps[] }) {
  return <ProductsScreen products={products} />;
}

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_PRODUCTS_DATABASE_ID;
  const productDb = await getDatabase(databaseId);

  const products = await Promise.all(
    productDb.map(async (product: any) => {
      const res = {
        image: "",
        title: product.properties.Name.title[0]?.plain_text,
        text: product.properties.Description.rich_text[0]?.plain_text,
        tags: product.properties.Tag.multi_select.map((tag: any) => tag.name),
        web_href: product.properties.WebLink.url,
        app_href: product.properties.AppStore.url,
        google_href: product.properties.GooglePlayStore.url,
      } as ProductionProps;

      // 画像処理
      if (product.properties.Image.files[0].file?.url) {
        if (!product.cover) {
          res.image = await createImage(
            product.id,
            "cover",
            product.properties.Image.files[0].file.url,
          );
        } else if (product.cover.type === "file") {
          // カバー画像のtypeがfileの場合、有効期限があるのでbufferに変換する
          res.image = await createImage(product.id, "cover", product.cover.file.url);
        } else if (product.cover.type === "external") {
          res.image = product.cover.external.url;
        }
        return res;
      } else {
        if (!product.cover) {
          res.image = await createOGPImage(
            product.id,
            product.properties.Name.title[0].plain_text,
            product.properties.Description.rich_text[0]?.plain_text, // Add the missing writerName argument
          );
        } else if (product.cover.type === "file") {
          // カバー画像のtypeがfileの場合、有効期限があるのでbufferに変換する
          res.image = await createImage(product.id, "cover", product.cover.file.url);
        } else if (product.cover.type === "external") {
          res.image = product.cover.external.url;
        }
        return res;
      }
    }),
  );

  return {
    props: { products },
    revalidate: 10,
  };
};
