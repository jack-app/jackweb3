import React from "react";
import { RichText } from "@/types/block";
import styles from "./index.module.scss";

type Props = {
  id: string;
  texts?: RichText[];
  isActive?: boolean;
};

export const TocHeading3Presentation: React.FC<Props> = ({ id, texts, isActive }) => {
  if (!texts) return null;
  return (
    <a className={`${styles.heading} ${isActive ? styles.active : ""}`} href={`#${id}`}>
      &emsp;{texts[0].text?.content}
    </a>
  );
};
