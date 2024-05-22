import React, { useEffect } from "react";
import tocbot from "tocbot";
import { Block } from "@/types/block";
import styles from "./index.module.scss";
import { renderToc } from "../hooks/renderToc";

type Props = {
  blocks: Block[];
};

export const BlogArticleTocPresentation: React.FC<Props> = ({ blocks }) => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc", //　目次を追加する class 名
      contentSelector: ".content", // 目次を取得するコンテンツの class 名
      headingSelector: "h2, h3, span", // 目次として取得する見出しタグ
    });
    console.log("tocbot", tocbot);
    // 不要となったtocbotインスタンスを削除
    return () => tocbot.destroy();
  }, []);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>目次</h2>
      {blocks.map((block) => {
        return renderToc(block);
      })}
      <div className="toc"></div>
    </div>
  );
};
