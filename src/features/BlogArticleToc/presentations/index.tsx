import React, { useEffect, useState } from "react";
import { Block } from "@/types/block";
import styles from "./index.module.scss";
import { renderToc } from "../hooks/renderToc";

type Props = {
  blocks: Block[];
};

export const BlogArticleTocPresentation: React.FC<Props> = ({ blocks }) => {
  const [activeId, setActiveId] = useState<string>("");
  useEffect(() => {
    let currentId = "";
    const handleScroll = () => {
      const headings = document.querySelectorAll("h2, h3");
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 0) {
          if (heading.id === "") return;
          currentId = heading.id;
        }
      });
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>目次</h2>
      {blocks.map((block) => {
        return (
          <div key={block.id} className={styles.tocItem}>
            {renderToc(block, activeId)}
          </div>
        );
      })}
    </div>
  );
};
