import React from "react";
import { BlogArticleBodies } from "@/features/BlogArticleBodies";
import { Block } from "@/types/block";
import styles from "./index.module.scss";

type Props = {
  id: string;
  blocks: Block[];
};

export const BlogArticleScreen: React.FC<Props> = ({ id, blocks }) => {
  return (
    <main className={styles.container}>
      <div>
        <h1>記事のタイトル</h1>
        <ul>
          <li>タグ</li>
          <li>タグ</li>
        </ul>
        <p>作者</p>
        <p>投稿日</p>
      </div>
      <BlogArticleBodies id={id} blocks={blocks} />
    </main>
  );
};
