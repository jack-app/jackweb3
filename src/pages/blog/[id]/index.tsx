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

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const pageId = params.id as string;
  const blocks = (await getBlocks(pageId)) as Block[];

  // 画像生成ではNode.jsの機能を使うため、サーバー上で処理されるgetStaticProps内で行う
  const filteredBlocks = await Promise.all(
    blocks.map(async (block) => {
      const { type, id } = block;

      let filteredBlock = block;

      if (type === "image") {
        const image = block[type];
        if (!image) return block;

        if (image.type === "file" && image.file) {
          const url = await createImage(pageId, id, image.file.url);
          filteredBlock = {
            ...block,
            image: {
              ...image,
              file: {
                ...image.file,
                url,
              },
            },
          };
        }
      }

      return filteredBlock;
    }),
  );

  return {
    props: {
      id: pageId,
      blocks: filteredBlocks,
    },
  };
};
