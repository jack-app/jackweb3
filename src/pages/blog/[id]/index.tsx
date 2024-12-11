import { BlogArticleScreen } from "@/screens/BlogArticle";
import { Block, Column } from "@/types/block";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Props as PageInfo } from "@/ui/ArticleTitle";
import createImage from "@/utils/createImage";
import createOGPImage from "@/utils/createOGPImage";
import { Meta } from "@/utils/meta";
import { getBlocks, getDatabase, getPage } from "@/utils/notion";
import { getArticles } from "@/utils/useGetArticles";

export default function Article({
  id,
  blocks,
  pageInfo,
  suggestArticles,
  description,
}: {
  id: string;
  blocks: Block[];
  pageInfo: PageInfo;
  suggestArticles: ArticleItemProps[];
  description: string;
}) {
  return (
    <>
      <Meta
        title={pageInfo.title}
        ogImage={`/${id}/ogp.png`}
        pageType="article"
        description={description}
      />
      <BlogArticleScreen
        id={id}
        blocks={blocks}
        pageInfo={pageInfo}
        suggestArticles={suggestArticles}
      />
    </>
  );
}

export const getStaticPaths = async () => {
  const articles = await getArticles();

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
  const filterBlocks = async (block: Block) => {
    const { type, id } = block;

    let filteredBlock = block;

    if (type === "column_list") {
      if (!block.children) return block;

      const columnList = await Promise.all(
        block.children.map(async (column) => {
          if (!column.children) return column;
          const childBlocks = await Promise.all(
            column.children.map(async (child) => await filterBlocks(child)),
          );

          return {
            ...column,
            children: childBlocks,
          };
        }),
      );

      filteredBlock = {
        ...block,
        children: columnList,
      };
    }

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
  };

  const filteredBlocks = await Promise.all(blocks.map((block) => filterBlocks(block)));

  //description作成
  const paragraphs = filteredBlocks.filter((block) => block.type === "paragraph");
  const fullText = paragraphs
    .map((block) => block.paragraph?.rich_text.map((text) => text.plain_text).join(""))
    .join("");
  const description = fullText.length <= 100 ? fullText : fullText.slice(0, 100) + "...";

  const getSuggestArticles = async () => {
    const publicArticles = await getArticles();

    const shuffleArray = (array: any[]) => {
      for (let i = array.length - 1; i >= 0; i--) {
        const tmp = Math.floor(Math.random() * (i + 1));
        [array[i], array[tmp]] = [array[tmp], array[i]];
      }
      return array;
    };

    const suggestLength = 3;
    const results = shuffleArray(publicArticles).slice(0, suggestLength);

    return results as ArticleItemProps[];
  };

  const suggestArticles = await getSuggestArticles();

  const title = page.properties.Name.title[0].plain_text;
  const writerName = page.properties.Writer.created_by.name || null;
  await createOGPImage(pageId, title, writerName);

  return {
    props: {
      id: pageId,
      blocks: filteredBlocks,
      suggestArticles: suggestArticles,
      pageInfo: pageInfo,
      description: description,
    },
  };
};
