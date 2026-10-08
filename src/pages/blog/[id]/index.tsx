import { ISR_REVALIDATE_SECONDS } from "@/constants";
import { BlogArticleScreen } from "@/screens/BlogArticle";
import { Block, Column } from "@/types/block";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Props as PageInfo } from "@/ui/ArticleTitle";
import cacheRemoteImage from "@/utils/cacheRemoteImage";
import createOGPImage from "@/utils/createOGPImage";
import { Meta } from "@/utils/meta";
import { getBlocks, getPage } from "@/utils/notion";
import { getArticles } from "@/utils/useGetArticles";

export default function Article({
  id,
  blocks,
  pageInfo,
  suggestArticles,
  description,
  lastEditedTime,
}: {
  id: string;
  blocks: Block[];
  pageInfo: PageInfo;
  suggestArticles: ArticleItemProps[];
  description: string;
  lastEditedTime: string;
}) {
  return (
    <>
      <Meta
        title={pageInfo.title}
        ogImage={`/${id}/ogp.png?v=${new Date(lastEditedTime).getTime()}`}
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
  // ビルド時に全記事を事前生成すると記事数に比例してNotion APIを大量に呼び出してしまう。
  // パスは事前生成せず、リクエスト時にオンデマンド生成し、ISRでキャッシュする。
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const pageId = params.id as string;

  // 公開記事の一覧。記事の存在確認とおすすめ記事の両方に使い回し、Notionへの問い合わせを1回に抑える。
  const publicArticles = await getArticles();

  // fallback: 'blocking' では任意のIDでアクセスされ得るため、
  // 公開記事に含まれないID(非公開・存在しない・公開日前)は404にする。
  const isPublicArticle = publicArticles.some((article) => article.id === pageId);
  if (!isPublicArticle) {
    return { notFound: true, revalidate: ISR_REVALIDATE_SECONDS };
  }

  const blocks = (await getBlocks(pageId)) as Block[];
  const page = (await getPage(pageId)) as any;
  const createdBy = page.properties.Created_By?.formula?.string;
  const customName = page.properties.Custom_Name?.rich_text?.[0]?.plain_text;
  const pageInfo = {
    title: page.properties.Name.title[0].plain_text,
    writerName: customName || createdBy || null,
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
        const imageData = await cacheRemoteImage(pageId, id, image.file.url);
        filteredBlock = {
          ...block,
          image: {
            ...image,
            width: imageData.width,
            height: imageData.height,
            file: {
              ...image.file,
              url: imageData.url,
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

  const getSuggestArticles = () => {
    const shuffleArray = (array: any[]) => {
      for (let i = array.length - 1; i >= 0; i--) {
        const tmp = Math.floor(Math.random() * (i + 1));
        [array[i], array[tmp]] = [array[tmp], array[i]];
      }
      return array;
    };

    const suggestLength = 3;
    // 表示中の記事を除いた公開記事からランダムに選ぶ(publicArticlesを再利用)
    const candidates = publicArticles.filter((article) => article.id !== pageId);
    const results = shuffleArray(candidates).slice(0, suggestLength);

    return results as ArticleItemProps[];
  };

  const suggestArticles = getSuggestArticles();

  const title = page.properties.Name.title[0].plain_text;
  const writerName = customName || createdBy || null;
  await createOGPImage(pageId, title, writerName, page.last_edited_time);

  return {
    props: {
      id: pageId,
      blocks: filteredBlocks,
      suggestArticles: suggestArticles,
      pageInfo: pageInfo,
      description: description,
      lastEditedTime: page.last_edited_time,
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
};
