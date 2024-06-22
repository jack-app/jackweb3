import Image from "next/image";
import React from "react";
import { BlogArticleBodies } from "@/features/BlogArticleBodies";
import { BlogArticleToc } from "@/features/BlogArticleToc";
import { Block } from "@/types/block";
import { Props as PageInfo } from "@/ui/ArticleTitle";
import styles from "./index.module.scss";
import BlogPreviewBodySkelton from "../presentations/Skelton";

export type Props = {
  loading: boolean;
  notionId?: string;
  blocks?: Block[];
  pageInfo?: PageInfo;
  notionPageId: string;
  inputNotionURL: string;
  setInputNotionURL: (url: string) => void;
  showPreviewFromNotionURL: () => void;
  reloadPreview: () => void;
};

export const BlogPreviewPresentation: React.FC<Props> = ({
  loading,
  notionId,
  blocks,
  pageInfo,
  notionPageId,
  inputNotionURL,
  setInputNotionURL,
  showPreviewFromNotionURL,
  reloadPreview,
}) => {
  return (
    <div className={styles.BlogPreviewContainer}>
      <div className={styles.UsageContainer}>
        <h2 className={styles.title}>１．プレビューしたい記事のNotionリンクをコピー</h2>
        <p className={styles.text}>
          jack`s Notion / ブログ
          にアクセスしてください。記事一覧からプレビューしたい記事を選択し、リンクをコピーしてください。
        </p>
        <Image src="/preview_usage.jpg" alt="" width={700} height={400} />
        <h2 className={`${styles.title} ${styles.mt24}`}>２．コピーしたリンクをペースト</h2>
        <p className={styles.text}>
          以下のフォームにコピーしたリンクをペーストし、確定を押してください。
        </p>
        <div className={styles.inputArea}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              showPreviewFromNotionURL();
            }}
          >
            <input
              type="text"
              className={styles.input}
              placeholder="https://www.notion.so/"
              value={inputNotionURL}
              onChange={(e) => {
                e.preventDefault();
                setInputNotionURL(e.target.value);
              }}
            />
            <button type="button" className={styles.inputButton} onClick={showPreviewFromNotionURL}>
              確定
            </button>
          </form>
        </div>
      </div>
      <div className={styles.PreviewContainer}>
        {loading ? (
          <BlogPreviewBodySkelton />
        ) : !notionId || !blocks || !pageInfo ? (
          <></>
        ) : (
          <div className={styles.article}>
            <BlogArticleBodies id={notionPageId} blocks={blocks} pageInfo={pageInfo} />
            <BlogArticleToc blocks={blocks} />
          </div>
        )}
        <button className={styles.reloadButton} onClick={reloadPreview}>
          <Image
            className={`${loading ? styles.reloadIconLoading : ""}`}
            src="/reload.svg"
            alt="reload"
            width={20}
            height={20}
          />
          <div className={styles.reloadButtonText}>更新</div>
        </button>
      </div>
    </div>
  );
};
