import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

type Props = {
  number: string;
  image: string;
  title: string;
  description: string;
  sub_description: string;
};

export const ProductDetailItem: React.FC<Props> = ({
  number,
  image,
  title,
  description,
  sub_description,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head_line}></div>
      <div className={styles.context}>
        <div className={styles.context_left}>
          <div className={styles.number}>{number}</div>
          <div className={styles.square}></div>
          <Image className={styles.image} src={image} alt="" width={100} height={100} />
          <div className={styles.title}>{title}</div>
          <div className={styles.sub_description}>{sub_description}</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.decoration_number}>1 2 3 4 5 6 7 8 9 10 11</div>
        <div className={styles.context_right}>
          <div className={styles.detail}>
            <div className={styles.release}> 2021-05-09 release</div>
            <div className={styles.description_main}>{description}</div>

            <div className={styles.link}>webllinkはこちら</div>
            <div className={styles.git}>void let&#0039;s see &#40;&#41; &#0061;&#0062; github </div>
          </div>
        </div>
      </div>
    </div>
  );
};
