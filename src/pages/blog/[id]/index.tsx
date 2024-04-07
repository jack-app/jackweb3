import { BlogArticleScreen } from "@/screens/BlogArticle";
import { Block } from "@/types/block";
import createImage from "@/utils/createImage";
import { getBlocks, getDatabase } from "@/utils/notion";

export default function Article({ id, blocks }: { id: string; blocks: Block[] }) {
  return <BlogArticleScreen id={id} blocks={blocks} />;
}

export const getStaticPaths = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const articles = await getDatabase(databaseId);

  // TODO:filterかけないと無駄に多くのページが生成される
  const paths = articles.map((article) => ({
    params: { id: article.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const blocks = (await getBlocks(databaseId)) as Block[];

  // 画像生成ではNode.jsの機能を使うため、getStaticProps内で行う
  const filteredBlocks = blocks.map((block) => {
    const { type, id } = block;
    if (type === "image") {
      const image = block[type];
      if (!image) return block;

      if (image.type === "file" && image.file) {
        const src = createImage(databaseId, id, image.file.url);
        return { ...block, [type]: { ...image, file: src } };
      }
    }
  });

  return {
    props: {
      id: databaseId,
      blocks: filteredBlocks,
    },
  };
};
