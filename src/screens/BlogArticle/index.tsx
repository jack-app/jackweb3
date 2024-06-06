import Link from "next/link";
import React from "react";
import { BlogArticleBodies } from "@/features/BlogArticleBodies";
import { BlogArticleToc } from "@/features/BlogArticleToc";
import { Block } from "@/types/block";
import { Props as ArticleItemProps } from "@/ui/ArticleItem";
import { Props as PageInfo } from "@/ui/ArticleTitle";
import { SuggestArticleList } from "@/ui/SuggestArticleList";
import styles from "./index.module.scss";

type Props = {
  id: string;
  blocks: Block[];
  pageInfo: PageInfo;
  suggestArticles: ArticleItemProps[];
};

export const BlogArticleScreen: React.FC<Props> = ({ id, blocks, pageInfo, suggestArticles }) => {
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
        <div>
          <BlogArticleBodies id={id} blocks={blocks} pageInfo={pageInfo} />
          <div className={styles.suggestedArticleListContainer}>
            <SuggestArticleList articles={suggestArticles} />
          </div>
        </div>
        <BlogArticleToc blocks={blocks} />
      </div>
    </main>
  );
};
