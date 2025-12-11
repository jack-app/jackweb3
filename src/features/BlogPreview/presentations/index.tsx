import Image from "next/image";
import React from "react";
import { TfiReload } from "react-icons/tfi";
import { BlogArticleBodies } from "@/features/BlogArticleBodies";
import { BlogArticleToc } from "@/features/BlogArticleToc";
import { Block } from "@/types/block";
import { Props as PageInfo } from "@/ui/ArticleTitle";
import { BlockCounter } from "@/ui/BlockCounter";
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
  showPreview: () => void;
};

export const BlogPreviewPresentation: React.FC<Props> = ({
  loading,
  notionId,
  blocks,
  pageInfo,
  notionPageId,
  inputNotionURL,
  setInputNotionURL,
  showPreview,
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
              showPreview();
            }}
          >
            <input
              type="text"
              className={styles.input}
              placeholder="https://www.notion.so/"
              value={inputNotionURL}
              onChange={(e) => setInputNotionURL(e.target.value)}
            />
            <button
              type="button"
              className={styles.inputButton}
              onClick={(e) => {
                e.preventDefault();
                showPreview();
              }}
            >
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
          <>
            {blocks && blocks.length > 0 && (
              <div className={styles.blockCounterWrapper}>
                <BlockCounter currentCount={blocks.length} maxCount={100} />
              </div>
            )}
            <div className={styles.article}>
              <BlogArticleBodies id={notionPageId} blocks={blocks} pageInfo={pageInfo} />
              <BlogArticleToc blocks={blocks} />
            </div>
          </>
        )}
        {blocks && pageInfo && (
          <button className={styles.reloadButton} onClick={showPreview}>
            <TfiReload className={`${loading ? styles.reloadIconLoading : ""}`} />
            <div className={styles.reloadButtonText}>更新</div>
          </button>
        )}
      </div>
    </div>
  );
};
