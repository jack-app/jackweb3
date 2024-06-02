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

  const baseClass = styles.heading;
  const activeClass = isActive ? styles.active : "";
  const typeClass = type === "heading_3" ? styles.heading3 : "";

  return (
    <a className={`${baseClass} ${activeClass} ${typeClass}`} href={`#${id}`}>
      <span className={styles.text}>{texts[0].text?.content}</span>
    </a>
  );
};
