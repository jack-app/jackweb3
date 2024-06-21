import { BlogScreen } from "@/screens/Blog";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Meta } from "@/utils/meta";
import { getArticles } from "@/utils/useGetArticles";

export default function Blog({ articles }: { articles: ArticleItemProps[] }) {
  return <BlogScreen articles={articles} headingText="記事一覧" />;
}

export async function getStaticProps() {
  const articles = await getArticles();

  return {
    props: {
      articles,
    },
  };
}
