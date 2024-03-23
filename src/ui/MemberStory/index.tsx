import React from "react";
import styles from "./index.module.scss";
import { BiPhotoAlbum } from "react-icons/bi";
import image from "next/image";
import { type } from "os";

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
        <div className={styles.photo}>
          <img src="" alt="" />
          aaa
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
