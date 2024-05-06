import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  inputNotionPageId: string;
  setInputNotionPageId: (value: string) => void;
  showPreviewAndSyncQueryParam: (id: string) => void;
};

export const BlogPreviewUsagePresentation: React.FC<Props> = ({
  inputNotionPageId,
  setInputNotionPageId,
  showPreviewAndSyncQueryParam,
}) => {
  return (
    <div className={styles.container}>
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
        <input
          type="text"
          className={styles.input}
          value={inputNotionPageId}
          onChange={(e) => {
            setInputNotionPageId(e.target.value);
          }}
        />
        <button
          className={styles.inputButton}
          onClick={() => showPreviewAndSyncQueryParam(inputNotionPageId)}
        >
          確定
        </button>
      </div>
    </div>
  );
};
