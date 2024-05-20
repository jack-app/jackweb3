import React from "react";
import { RichText } from "@/types/block";
import styles from "./index.module.scss";

type Props = {
  id: string;
  texts?: RichText[];
};

export const TocHeading1Presentation: React.FC<Props> = ({ id, texts }) => {
  if (!texts) return null;
  return (
    <a className={styles.heading} href={`#${id}`}>
      {texts[0].text?.content}
    </a>
  );
};
