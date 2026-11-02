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
  const ARTICLES_PER_PAGE = 21;
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  const changePage = (page: number) => {
    setSelectedIndex(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <Heading1 enTitle="Blog" jaTitle="ブログ" />
      <div className={styles.wrapper}>
        <Heading2 text={headingText} />
        <div className={styles.articlesWrapper}>
          {articles
            .slice((selectedIndex - 1) * ARTICLES_PER_PAGE, selectedIndex * ARTICLES_PER_PAGE)
            .map((article) => (
              <ArticleItem key={article.id} {...article} />
            ))}
        </div>
        <div>
          <div className={styles.pagenationWrapper}>
            <PaginationButton
              selectedIndex={selectedIndex}
              totalPages={totalPages}
              onPrev={() => changePage(Math.max(1, selectedIndex - 1))}
              onNext={() => changePage(Math.min(totalPages, selectedIndex + 1))}
              onPageChange={changePage}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
