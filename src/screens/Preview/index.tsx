import React from "react";
import { BlogPreview } from "@/features/BlogPreview";
import styles from "./index.module.scss";

type Props = {};

export const PreviewScreen: React.FC<Props> = (props) => {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.pageTitle}>ブログプレビュー</h1>
      <BlogPreview />
    </main>
  );
};
