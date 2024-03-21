import React from "react";
import styles from "./index.module.scss";

type Props = {
  title: string;
};

export const TopHeading2: React.FC<Props> = ({ title = "Title" }) => {
  return (
    <>
      <div className={styles.wrapper}>"{title}"</div>
    </>
  );
};
