import React, { useState } from "react";
import { RichText } from "@/types/block";
import styles from "./../index.module.scss";

export const RenderText = (text: RichText[]) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // textの正規化
  const textAsString = text.reduce((acc, { text }) => (text ? acc + text.content : acc), "");

  return (
    <>
      {textAsString.length > 70 && !isExpanded
        ? `${textAsString.substring(0, 70)}　...`
        : textAsString}
      {textAsString.length > 70 && (
        <button onClick={toggleExpand} className={styles.moreButton}>
          {isExpanded ? "閉じる" : "もっと見る"}
        </button>
      )}
    </>
  );
};
