import { BlogScreen } from "@/screens/Blog";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Meta } from "@/utils/meta";
import { getDatabase } from "@/utils/notion";
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
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
  const articleDb = await getDatabase(databaseId);

  const writers = new Set<string>();
  articleDb.forEach((article: any) => {
    const customName = article.properties.Custom_Name?.rich_text?.[0]?.plain_text;
    const createdBy = article.properties.Created_By?.formula?.string;
    const writerName = customName || createdBy;
    if (writerName) {
      writers.add(writerName);
    }
  });
  const paths = Array.from(writers).map((writer) => ({
    params: { writer: writer },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { writer: string } }) {
  const writer = params.writer;
  const articles = await getArticles(undefined, params.writer);

  return {
    props: {
      writer,
      articles,
    },
  };
}
