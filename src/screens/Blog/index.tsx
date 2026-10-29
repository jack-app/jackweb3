import React from "react";
import { ArticleItem, Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Heading1 } from "@/ui/Heading1";
import { Heading2 } from "@/ui/Heading2";
import { PaginationButton } from "@/ui/PagenationButton";
import styles from "./index.module.scss";


type Props = {
  articles: ArticleItemProps[];
  headingText: string;
};


export const BlogScreen: React.FC<Props> = ({ articles, headingText }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const ARTICLES_PER_PAGE = 18;
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  return (
    <main>
      <Heading1 enTitle="Blog" jaTitle="ブログ" />
      <div className={styles.wrapper}>
        <Heading2 text={headingText} />
        <div className={styles.articlesWrapper}>
          {articles.slice((selectedIndex - 1) * ARTICLES_PER_PAGE, selectedIndex * ARTICLES_PER_PAGE).map((article) => (
            <ArticleItem key={article.id} {...article} />
          ))}
        </div>
        <div>
          <div className={styles.pagenationWrapper}>
            <PaginationButton
              selectedIndex={selectedIndex}
              totalPages={totalPages}
              onPrev={() => setSelectedIndex((prev) => Math.max(1, prev - 1))}
              onNext={() => setSelectedIndex((prev) => Math.min(totalPages, prev + 1))}
              onPageChange={(page) => setSelectedIndex(page)}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
