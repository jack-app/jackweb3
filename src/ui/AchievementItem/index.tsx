import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

type Props = {
  date: String;
  text: String;
  image: string;
};

export const AchievementItem: React.FC<Props> = ({ date, text, image }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.context}>
        <div className={styles.date}>{date}</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.tag}>a b c </div>
      </div>
      <Image className={styles.image} src={image} alt="" width={200} height={200} />
    </div>
  );
};
