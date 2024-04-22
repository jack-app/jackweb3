import { log } from "console";
import { ProductsScreen } from "@/screens/Products";
import { Props as ProductionProps } from "@/ui/Production";
import createImage from "@/utils/createImage";
import { getDatabase } from "@/utils/notion";

export default function Products({ products }: { products: ProductionProps[] }) {
  return <ProductsScreen products={products} />;
}

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_PRODUCTS_DATABASE_ID;
  const productDb = await getDatabase(databaseId);

  const products = await Promise.all(
    productDb.map(async (product: any) => {
      console.log("product", product);
      let imageUrl = "";
      if (Array.isArray(product.Image) && product.Image.length > 0) {
        const image = product.Image[0];

        if (image.type === "file" && image.file) {
          imageUrl = await createImage(product.id, "image", image.file.url);
        }
      } else if (product.Image && typeof product.Image === "object") {
        const image = product.Image;

        if (image.type === "file" && image.file) {
          imageUrl = await createImage(product.id, "image", image.file.url);
        }
      }
      console.log("imageUrl", imageUrl);

      const res = {
        image: imageUrl,
        title: product.properties.Name.title[0]?.plain_text,
        text: product.properties.Description.rich_text[0]?.plain_text,
        tags: product.properties.Tag.multi_select.map((tag: any) => tag.name),
        web_href: product.properties.WebLink.url,
        app_href: product.properties.AppStore.url,
        google_href: product.properties.GooglePlayStore.url,
      } as ProductionProps;

      return res;
    }),
  );

  return {
    props: { products },
    revalidate: 10,
  };
};
