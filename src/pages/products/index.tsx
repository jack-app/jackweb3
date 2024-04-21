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
      const res = {
        image: product.Image ? product.Image.url : "",
        title: product.properties.Name.title[0]?.plain_text,
        text: product.properties.Description.rich_text[0]?.plain_text,
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
      console.log("hogehogeimage", res.image);
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
