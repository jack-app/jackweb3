import React from "react";
import styles from "./index.module.scss";

type Props = {
  title: string;
  subTitle: string;
};

export const TopHeading2: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.subtitile__start}>
          &lt;h2 class &#0061; &quot;{subTitle}&quot;&gt;
        </div>
        <div className={styles.title}>&quot;{title}&quot;</div>

        <div className={styles.subtitile__end}>&lt;h2&gt;</div>
      </div>
    </>
  );
};
