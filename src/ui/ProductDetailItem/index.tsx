import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

type Props = {
  number: string;
  image: string;
  title: string;
  description: string;
};

export const ProductDetailItem: React.FC<Props> = ({ number, image, title, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head_line}></div>
      <div className={styles.context}>
        <div className={styles.context_left}>
          <div className={styles.number}>{number}</div>
          <Image
            className={styles.image}
            src={image}
            alt={"プロダクトの画像"}
            width={117}
            height={98}
          />
          <div className={styles.title}>{title}</div>
          <div className={styles.sub_description}>aiu</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.decoration_number}>1 2 3 4 5 6 7 8 9 10 11</div>
        <div className={styles.context_right}>
          <div className={styles.detail}>
            <div className={styles.release}> 2021-05-09 release</div>
            <div className={styles.description_main}>aksjdnalsdkkn</div>

            <div className={styles.link}>webllinkはこちら</div>
            <div className={styles.git}>void github </div>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
