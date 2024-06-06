import { BlogArticleScreen } from "@/screens/BlogArticle";
import { Block } from "@/types/block";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Props as PageInfo } from "@/ui/ArticleTitle";
import createImage from "@/utils/createImage";
import { getBlocks, getDatabase, getPage } from "@/utils/notion";
import { getSuggestArticles } from "./hooks";

export default function Article({
  id,
  blocks,
  pageInfo,
  suggestArticles,
}: {
  id: string;
  blocks: Block[];
  pageInfo: PageInfo;
  suggestArticles: ArticleItemProps[];
}) {
  return (
    <BlogArticleScreen
      id={id}
      blocks={blocks}
      pageInfo={pageInfo}
      suggestArticles={suggestArticles}
    />
  );
}

export const getStaticPaths = async () => {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
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
  const page = (await getPage(pageId)) as any;
  const pageInfo = {
    title: page.properties.Name.title[0].plain_text,
    writerName: page.properties.Writer.created_by.name || null,
    writerImage: page.properties.Writer.created_by.avatar_url || null,
    tags: page.properties.tag.multi_select,
    date: page.properties.Publish_Date.date
      ? page.properties.Publish_Date.date.start
      : page.created_time.slice(0, 10),
  } as PageInfo;
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

  const suggestArticles = (await getSuggestArticles()) as ArticleItemProps[];

  return {
    props: {
      id: pageId,
      blocks: filteredBlocks,
      suggestArticles: suggestArticles,
      pageInfo: pageInfo,
    },
  };
};
