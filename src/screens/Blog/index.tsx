import React from "react";
import { ArticleItem, Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Heading1 } from "@/ui/Heading1";
import styles from "./index.module.scss";

type Props = {
  articles: ArticleItemProps[];
};

export const BlogScreen: React.FC<Props> = ({ articles }) => {
  return (
    <div>
      <Heading1 enTitle="Blog" jaTitle="ブログ" />
      <div className="grid max-w-[744px] justify-center gap-50 md:grid-cols-2 md:gap-x-60 md:gap-y-70">
        {articles.map((article) => (
          <ArticleItem key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};
