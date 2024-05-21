import React from "react";
import { Block } from "@/types/block";
import styles from "./index.module.scss";
import { renderToc } from "../hooks/renderToc";

type Props = {
  blocks: Block[];
};

export const BlogArticleTocPresentation: React.FC<Props> = ({ blocks }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>目次</h2>
      {blocks.map((block) => {
        return renderToc(block);
      })}
    </div>
  );
};
