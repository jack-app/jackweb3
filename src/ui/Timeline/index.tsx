import Image from "next/image";
import React from "react";
import { schedule } from "./data";
import styles from "./index.module.scss";

type Props = {};

export const Timeline: React.FC<Props> = (Props) => {
  return (
    <div className={styles.timeline}>
      {schedule.map((item, index) => (
        <div className={styles.timeline__item} key={index}>
          <div className={styles.timeline__inner}>
            <Image className={styles.item_img} src={item.image} alt="" width={300} height={180} />
            <div className={styles.timeline__text}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.bar}></div>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.triangle}></div>
    </div>
  );
};
