import React from "react";
import { ArticleItem, Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Heading1 } from "@/ui/Heading1";
import { Heading2 } from "@/ui/Heading2";
import styles from "./index.module.scss";

type Props = {
  articles: ArticleItemProps[];
  headingText: string;
};

export const BlogScreen: React.FC<Props> = ({ articles, headingText }) => {
  return (
    <main>
      <Heading1 enTitle="Blog" jaTitle="ブログ" />
      <div className={styles.wrapper}>
        <Heading2 text={headingText} />
        <div className={styles.articlesWrapper}>
          {articles.map((article) => (
            <ArticleItem key={article.id} {...article} />
          ))}
        </div>
      </div>
    </main>
  );
};
