import React from "react";
import { BlogPreview } from "@/features/BlogPreview";
import styles from "./index.module.scss";

type Props = {
  notionId?: string;
};

export const PreviewScreen: React.FC<Props> = ({ notionId }) => {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.pageTitle}>ブログプレビュー</h1>
      <BlogPreview id={notionId} />
    </main>
  );
};
