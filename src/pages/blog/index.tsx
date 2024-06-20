import { BlogScreen } from "@/screens/Blog";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Meta } from "@/utils/meta";
import { getArticles } from "@/utils/useGetArticles";

export default function Blog({ articles }: { articles: ArticleItemProps[] }) {
  return (
    <>
      <Meta title="ブログ" />
      <BlogScreen articles={articles} />
    </>
  );
}

export async function getStaticProps() {
  const articles = await getArticles();

  return {
    props: {
      articles,
    },
  };
}
