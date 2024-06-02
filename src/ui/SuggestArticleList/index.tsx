import React from "react";
import { Props as ArticleItemProps, ArticleItem } from "@/ui/ArticleItem";
import styles from "./index.module.scss";

type Props = {
  articles: ArticleItemProps[];
};

export const SuggestArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <h2>おすすめ記事</h2>
      <div className={styles.body}>
        {articles.map((article) => (
          <ArticleItem key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};
