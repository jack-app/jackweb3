import { useRouter } from "next/router";
import { BlogArticleScreen } from "@/screens/BlogArticle";
import { Block } from "@/types/block";
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

  //TODO: ここで画像を取得する処理を追加する

  return {
    props: {
      id: databaseId,
      blocks,
    },
  };
};
