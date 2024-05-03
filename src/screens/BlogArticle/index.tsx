import id from "@fullcalendar/core/locales/id.js";
import Link from "next/link";
import React from "react";
import { BlogArticleBodies } from "@/features/BlogArticleBodies";
import { SuggestArticleList } from "@/features/SuggestArticleList";
import { Block } from "@/types/block";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import styles from "./index.module.scss";

type Props = {
  id: string;
  blocks: Block[];
  suggestArticles: ArticleItemProps[];
};

export const BlogArticleScreen: React.FC<Props> = ({ id, blocks, suggestArticles }) => {
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
        <ul>
          <li>
            <Link href="/">トップページ</Link>
          </li>
          <li>
            <Link href="/blog">ブログ</Link>
          </li>
          <li>
            <p>このページ</p>
          </li>
        </ul>
      </div>
      <BlogArticleBodies id={id} blocks={blocks} />
      <SuggestArticleList articles={suggestArticles} />
    </main>
  );
};
