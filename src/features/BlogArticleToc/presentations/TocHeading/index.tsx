import React from "react";
import { RichText } from "@/types/block";
import styles from "./index.module.scss";

type Props = {
  id: string;
  texts?: RichText[];
  isActive?: boolean;
  type: string;
};

export const TocHeadingPresentation: React.FC<Props> = ({ id, texts, isActive, type }) => {
  if (!texts) return null;
  const content = type === "heading_3" ? `\u2003${texts[0].text?.content}` : texts[0].text?.content;
  return (
    <a className={`${styles.heading} ${isActive ? styles.active : ""}`} href={`#${id}`}>
      {content}
    </a>
  );
};
