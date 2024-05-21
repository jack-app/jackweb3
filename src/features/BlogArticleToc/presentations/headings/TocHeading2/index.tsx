import { text } from "stream/consumers";
import React from "react";
import { RichText } from "@/types/block";
import styles from "./index.module.scss";

type Props = {
  id: string;
  texts?: RichText[];
};

export const TocHeading2Presentation: React.FC<Props> = ({ id, texts }) => {
  if (!texts) return null;
  return (
    <div>
      <a className={styles.heading} href={`#${id}`}>
        {texts[0].text?.content}
      </a>
    </div>
  );
};
