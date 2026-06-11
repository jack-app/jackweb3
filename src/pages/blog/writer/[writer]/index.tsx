import { ISR_REVALIDATE_SECONDS } from "@/constants";
import { BlogScreen } from "@/screens/Blog";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Meta } from "@/utils/meta";
import { getArticles } from "@/utils/useGetArticles";

export default function WriterPage({
  writer,
  articles,
}: {
  writer: string;
  articles: ArticleItemProps[];
}) {
  const headingText = `${writer}による記事`;

  return (
    <>
      <Meta title={headingText} />
      <BlogScreen articles={articles} headingText={headingText} />
    </>
  );
}

export async function getStaticPaths() {
  // ライター一覧の取得のためだけにビルド時にNotionへ問い合わせるのを避け、
  // リクエスト時にオンデマンド生成してISRでキャッシュする。
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }: { params: { writer: string } }) {
  const writer = params.writer;
  const articles = await getArticles(undefined, params.writer);

  // 公開記事が存在しないライター(存在しないライターへの直接アクセスなど)は404にする。
  if (articles.length === 0) {
    return { notFound: true, revalidate: ISR_REVALIDATE_SECONDS };
  }

  return {
    props: {
      writer,
      articles,
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
}
