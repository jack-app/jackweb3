import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  image: string;
  name: string;
  text: string;
  type: string;
  job?: string;
};

export const MemberStory: React.FC<Props> = ({ name, text, type, image, job }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.card_photo}>
          <Image
            className={styles.photo}
            src={image}
            width={244}
            height={244}
            alt={`${name}のプロフィール画像`}
          />
          <div className={styles.square}></div>
        </div>

        <div className={styles.card}>
          <div className={styles.card_header_wrapper}>
            {job && <span className={styles.job}>{job}</span>}
            <div className={styles.card_header}>
              <div className={styles.name}>{name}</div>
              <div className={styles.type}>{type}</div>
            </div>
          </div>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
    </>
  );
};
