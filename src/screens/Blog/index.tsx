import React from "react";
import { ArticleItem, Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Heading1 } from "@/ui/Heading1";
import styles from "./index.module.scss";

type Props = {
  articles: ArticleItemProps[];
};

export const BlogScreen: React.FC<Props> = ({ articles }) => {
  return (
    <main>
      <Heading1 enTitle="Blog" jaTitle="ブログ" />
      <div className={styles.articlesWrapper}>
        {articles.map((article) => (
          <ArticleItem key={article.id} {...article} />
        ))}
      </div>
    </main>
  );
};
