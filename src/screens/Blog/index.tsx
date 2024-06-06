import { table } from "console";
import React from "react";
import styles from "./index.module.scss";
import { ArticleItem, Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Heading1 } from "@/ui/Heading1";
import { Tag, TagType } from "@/ui/Tag";

type Props = {
  articles: ArticleItemProps[];
  tags: TagType[];
};

export const BlogScreen: React.FC<Props> = ({ articles, tags }) => {
  return (
    <main>
      <Heading1 enTitle="Blog" jaTitle="ブログ" />
      <div className={styles.blogWrapper}>
        <div className={styles.articlesWrapper}>
          {articles.map((article) => (
            <ArticleItem key={article.id} {...article} />
          ))}
        </div>
        <div className={styles.side}>
          <div className={styles.wrapper_side}>
            <span className={styles.sideTitle}>Tags</span>
            <div className={styles.tags}>
              {tags?.map((tag) => <Tag key={tag.id} name={tag.name} color={tag.color} />)}
            </div>
          </div>
          {/* <div className={styles.wrapper_side}>
            <span className={styles.sideTitle}>Writers</span>
            <div className={styles.tags}>
              {tags?.map((tag) => <Tag key={tag.id} name={tag.name} color={tag.color} />)}
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
};
