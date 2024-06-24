import React, { useState } from "react";
import { RichText } from "@/types/block";
import styles from "./../index.module.scss";

export const RenderText = (text: RichText[]) => {
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  // textの正規化
  let textAsString = "";
  text.map((value: RichText) => {
    const { text } = value;
    if (!text) return null;
    textAsString += text.content;
  });

  if (!isExpanded) {
    // 展開されていない場合、最初の70文字と「もっと見る」ボタンを表示
    return (
      <>
        {textAsString.length > 70 ? textAsString.substring(0, 70) + "　..." : textAsString}
        {textAsString.length > 70 && (
          <button onClick={toggleExpand} className={styles.moreButton}>
            もっと見る
          </button>
        )}
      </>
    );
  } else {
    // 展開されている場合、全テキストと「閉じる」ボタンを表示
    return (
      <>
        {textAsString}
        <button onClick={toggleExpand} className={styles.moreButton}>
          閉じる
        </button>
      </>
    );
  }
};
