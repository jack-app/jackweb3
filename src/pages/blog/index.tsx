import { BlogScreen } from "@/screens/Blog";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Meta } from "@/utils/meta";
import { getArticles } from "@/utils/useGetArticles";

export default function Blog({ articles }: { articles: ArticleItemProps[] }) {
  // <<<<<<< HEAD
  return <BlogScreen articles={articles} headingText="記事一覧" />;
  // =======
  // return (
  //   <>
  //     <Meta title="ブログ" />
  //     <BlogScreen articles={articles} />
  //   </>
  // );
  // >>>>>>> 7e5a56560650c16f088935fec71455378102fb21
}

export async function getStaticProps() {
  const articles = await getArticles();

  return {
    props: {
      articles,
    },
  };
}
