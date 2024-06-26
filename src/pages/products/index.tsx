import { ProductsScreen } from "@/screens/Products";
import { ProductionDetailProps as ProductionProps } from "@/ui/Production";
import createImage from "@/utils/createImage";
import { Meta } from "@/utils/meta";
import { getDatabase } from "@/utils/notion";

export default function Products({ products }: { products: ProductionProps[] }) {
  return (
    <>
      <Meta title="プロダクト" />
      <ProductsScreen products={products} />
    </>
  );
}

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_PRODUCTS_DATABASE_ID;
  const productDb = await getDatabase(databaseId);
  const products = await Promise.all(
    productDb.map(async (product: any) => {
      const arrayDetail = product.properties.Detail.rich_text;
      const arrayText = product.properties.Description.rich_text;
      const arrayDescription = product.properties.Description.rich_text;
      const arrayRelease = product.properties.ReleaseDate
        ? product.properties.ReleaseDate.rich_text
        : null;
      const res = {
        id: product.id,
        image: "",
        title: product.properties.Name.title[0]?.plain_text || null,
        text: arrayText || null,
        description: arrayDescription || null,
        detail: arrayDetail || null,
        release_date: arrayRelease || null,
        tags: product.properties.Tag.multi_select.map((tag: any) => tag.name),
        git_href: product.properties.GitHub.url || null,
        web_href: product.properties.WebLink.url || null,
        app_href: product.properties.AppStore.url || null,
        google_href: product.properties.GooglePlayStore.url || null,
      } as ProductionProps;
      console.log(res);

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

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};
