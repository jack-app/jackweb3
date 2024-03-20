import Link from "next/link";
import React from "react";
import { IoMdMenu } from "react-icons/io";
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
          <Link href="/members">メンバー</Link>
          <Link href="/activities">活動内容</Link>
          <Link href="/achievements">活動実績</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/blog">ブログ</Link>
        </nav>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfOj8Twb_KlxPEr2whaQu2POouv_uFSJ27qUTc5cMWKEzxETw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contact}
        >
          体験応募はこちら
        </Link>
        <button className={styles.menuButton}>
          <IoMdMenu size={24} />
        </button>
      </div>
    </header>
  );
};
