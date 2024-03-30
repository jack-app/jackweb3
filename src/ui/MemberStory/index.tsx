import React from "react";
import styles from "./index.module.scss";

type Props = {
  image: string;
  name: string;
  text: string;
  type: string;
};

export const MemberStory: React.FC<Props> = ({ name, text, type, image }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.card_photo}>
          <img
            className={styles.photo}
            src={image}
            width={244}
            height={244}
            alt="メンバーのアイコン"
          />
          <div className={styles.square}></div>
        </div>

        <div className={styles.card}>
          <div className={styles.card__header}>
            {" "}
            <div className={styles.name}>{name}</div>
            <div className={styles.type}>{type}</div>
          </div>

          <div className={styles.text}>{text}</div>
        </div>
      </div>
    </>
  );
};
