import React from "react";
import styles from "./index.module.scss";

type Props = {
  title: String;
  text: String;
};

export const Production: React.FC<Props> = ({ title, text }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.item_img} src="" alt="" />
      <div className={styles.item_context}>
        <div className={styles.context}>
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>{text}</div>
          <div className={styles.tag}></div>
        </div>
      </div>
    </div>
  );
};
