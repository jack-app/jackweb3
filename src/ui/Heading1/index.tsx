import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  enTitle: string;
  jaTitle: string;
};

export const Heading1: React.FC<Props> = ({ enTitle, jaTitle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading1}>&#47;&#42; {enTitle} &#42;&#47;</div>
      <div className={styles.page}>
        <Link href="/" className={styles.toppage}>
          トップページ
        </Link>
        <span>&#62;</span>
        <span>{jaTitle}</span>
      </div>
    </div>
  );
};
