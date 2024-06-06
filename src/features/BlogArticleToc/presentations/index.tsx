import React, { useEffect, useState } from "react";
import { Block } from "@/types/block";
import styles from "./index.module.scss";
import { renderToc } from "../hooks/renderToc";
import { useActiveId } from "../hooks/useActiveId";

type Props = {
  blocks: Block[];
};

export const BlogArticleTocPresentation: React.FC<Props> = ({ blocks }) => {
  const activeId = useActiveId();
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>目次</h2>
      {blocks.map((block) => (
        <div key={block.id} className={styles.tocItem}>
          {renderToc(block, activeId)}
        </div>
      ))}
    </div>
  );
};
