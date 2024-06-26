import Link from "next/link";
import React from "react";
import { BlogArticleBodies } from "@/features/BlogArticleBodies";
import { BlogArticleToc } from "@/features/BlogArticleToc";
import { Block } from "@/types/block";
import { Props as PageInfo } from "@/ui/ArticleTitle";
import styles from "./index.module.scss";

type Props = {
  id: string;
  blocks: Block[];
  pageInfo: PageInfo;
};

export const BlogArticleScreen: React.FC<Props> = ({ id, blocks, pageInfo }) => {
  return (
    <main className={styles.container}>
      <div className={styles.page}>
        <Link href="/" className={styles.gotopage}>
          トップページ
        </Link>
        <span>&#62;</span>
        <Link href="/blog" className={styles.gotopage}>
          ブログ
        </Link>
        <span>&#62;</span>
        <span>ポスト</span>
      </div>
      <div className={styles.article}>
        <BlogArticleBodies id={id} blocks={blocks} pageInfo={pageInfo} />
        <BlogArticleToc blocks={blocks} />
      </div>
      <div className={styles.suggestedArticleListContainer}>
        <SuggestArticleList articles={suggestArticles} />
      </div>
    </main>
  );
};
