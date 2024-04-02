import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

type Props = {
  image: string;
  title: String;
  text: String;
};

export const Production: React.FC<Props> = ({ image, title, text }) => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.item_img}
        src={image}
        alt="プロダクトの画像"
        width={352}
        height={200}
      />
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
