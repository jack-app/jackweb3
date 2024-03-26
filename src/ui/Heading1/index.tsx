import Link from "next/link"
import React from 'react';
import styles from './index.module.scss';

type Props = {
  heading1: string;
  title: string;
  // onPageClick: () => void;
};

export const Heading1: React.FC<Props> = ({ heading1, title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading1}>
        /* {heading1} */
      </div>
      <div className={styles.page}>
        <Link href="/" className={styles.toppage}>トップページ </Link>
        <span> ＞ </span>
        <span>{title}</span>
      </div>
    </div>
  );
};