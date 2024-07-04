import React from "react";
import styles from "./index.module.scss";

type Props = {
  title: string;
};

export const TopHeading2: React.FC<Props> = ({ title }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>&quot;{title}&quot;</div>
      </div>
    </>
  );
};
