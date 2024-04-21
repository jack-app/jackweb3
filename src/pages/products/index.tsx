import { ProductsScreen } from "@/screens/Products";
import { Props as ProductionProps } from "@/ui/Production";
import createImage from "@/utils/createImage";
import createOGPImage from "@/utils/createOGPImage";
import { getDatabase } from "@/utils/notion";

export default function Products({ products }: { products: any[] }) {
  return <ProductsScreen products={products} />;
}

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_PRODUCTS_DATABASE_ID;
  const productDb = await getDatabase(databaseId);
  console.log(productDb);

  const products = await Promise.all(
    productDb.map(async (product: any) => {
      console.log("product", product.Image);
      // let image = [];
      // if (product.properties.Image && product.properties.Image.files) {
      //   image = product.properties.Image.files
      //     .filter((file: any) => file && file.url)
      //     .map((file: any) => file.file.url);
      // }
      const res = {
        image: product.Image ? product.Image.url : "",
        // image: image,
        // image: product.properties.Image.files.map((file: any) => file.file.url),
        title: product.properties.Name.title[0]?.plain_text,
        text: product.properties.Description.rich_text[0]?.plain_text,
        tags: product.properties.Tag.multi_select.map((tag: any) => tag.name),
        web_href: product.properties.WebLink.url,
        app_href: product.properties.AppStore.url,
        google_href: product.properties.GooglePlayStore.url,
      } as ProductionProps;

      // if (!product.cover) {
      //   res.image = await createOGPImage(
      //     product.id,
      //     product.properties.Name.title[0]?.plain_text,
      //     product.properties.Writer?.created_by?.name || "Unknown Author",
      //   );
      // } else
      // if (product.cover.type === "file") {
      //   // カバー画像のtypeがfileの場合、有効期限があるのでbufferに変換する
      //   res.image = await createImage(product.id, "cover", product.cover.file.url);
      // } else if (product.cover.type === "external") {
      //   res.image = product.cover.external.url;
      // }
      // console.log(res);
      // if (product.type === "file") {
      //   // カバー画像のtypeがfileの場合、有効期限があるのでbufferに変換する
      //   res.image = product.cover.file.url;
      // } else if (product.type === "external") {
      //   res.image = product.cover.external.url;
      // }
      // if (product.images.type === "file") {
      //   // カバー画像のtypeがfileの場合、有効期限があるのでbufferに変換する
      //   res.image = await createImage(product.id, "cover", product.cover.file.url);
      // } else if (product.cover.type === "external") {
      //   res.image = product.cover.external.url;
      // }

      console.log("hogehogeimage", res);
      return res;
    }),
  );

  return {
    props: {
      products: products,
    },
    revalidate: 10, // ← 秒数で指定する
  };
};
