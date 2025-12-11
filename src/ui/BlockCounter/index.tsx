import React from "react";
import styles from "./index.module.scss";

type Props = {
  currentCount: number;
  maxCount: number;
};

export const BlockCounter: React.FC<Props> = ({ currentCount, maxCount }) => {
  const percentage = (currentCount / maxCount) * 100;
  const isNearLimit = percentage >= 80;
  const isOverLimit = currentCount > maxCount;

  return (
    <div className={styles.container}>
      <span
        className={`${styles.count} ${isNearLimit ? styles.warning : ""} ${isOverLimit ? styles.error : ""}`}
      >
        {currentCount}/{maxCount}ブロック使用中
      </span>
    </div>
  );
};
