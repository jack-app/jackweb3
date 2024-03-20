import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

type Props = {};

export const Header: React.FC<Props> = (props) => {
  return (
    <header className={styles.wrapper}>
      <Link href="/" className={styles.logo}>
        jack
      </Link>
      <div className={styles.right}>
        <nav className={styles.nav}>
          <Link href="/products">プロダクト</Link>
          <Link href="/member">メンバー</Link>
          <Link href="/activities">活動内容</Link>
          <Link href="/achievements">活動実績</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/blog">ブログ</Link>
        </nav>
        <Link
          href="https://jack-website.netlify.app/"
          about="_blank"
          rel="noopener noreferrer"
          className={styles.contact}
        >
          体験応募はこちら
        </Link>
      </div>
    </header>
  );
};
