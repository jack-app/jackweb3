import React from "react";
import styles from "./index.module.scss";
import { BiPhotoAlbum } from "react-icons/bi";
import image from "next/image";

type Props = {
  name: string;
  text: string;
};

export const MemberStory: React.FC<Props> = ({ name, text }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.photo}>
          <img src="" alt="" />
          aaa
        </div>
        <div className={styles.card}>
          <div className={styles.card__header}>
            {" "}
            <div className={styles.name}>hogehoge</div>
            <div className={styles.type}>名古屋大学</div>
          </div>

          <div className={styles.text}>aiueo</div>
        </div>
      </div>
    </>
  );
};
