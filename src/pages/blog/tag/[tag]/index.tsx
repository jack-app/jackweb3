import { ISR_REVALIDATE_SECONDS } from "@/constants";
import { BlogScreen } from "@/screens/Blog";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Meta } from "@/utils/meta";
import { getArticles } from "@/utils/useGetArticles";

export default function TagPage({ tag, articles }: { tag: string; articles: ArticleItemProps[] }) {
  const headingText = `${tag}に関する記事`;
  return (
    <>
      <Meta title={headingText} />
      <BlogScreen articles={articles} headingText={headingText} />
    </>
  );
}

export async function getStaticPaths() {
  // タグの一覧取得のためだけにビルド時へNotionへ問い合わせるのを避け、
  // リクエスト時にオンデマンド生成してISRでキャッシュする。
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }: { params: { tag: string } }) {
  const tag = params.tag;
  const articles = await getArticles(tag);

  // 公開記事が存在しないタグ(存在しないタグへの直接アクセスなど)は404にする。
  if (articles.length === 0) {
    return { notFound: true, revalidate: ISR_REVALIDATE_SECONDS };
  }

  return {
    props: {
      tag,
      articles,
    },
    revalidate: ISR_REVALIDATE_SECONDS,
  };
}
