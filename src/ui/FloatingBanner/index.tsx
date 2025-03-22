import React from "react";
import styles from "./index.module.scss";

type Props = {};

export const FloatingBanner: React.FC<Props> = (props) => {
  return (
    <div className={styles.floatingBanner}>
      <img className={styles.decoration_top} src="/floating_banner_item.svg" alt="装飾の画像" />
      <div className={styles.text}>新歓情報はこちら</div>
      <img className={styles.decoration_bottom} src="/floating_banner_item.svg" alt="装飾の画像" />
    </div>
  );
};
