import Link from "next/link";
import React from "react";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import styles from "./index.module.scss";

type Props = {};

export const Header: React.FC<Props> = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const closeMenu = () => {
    setShowNav(false);
  };
  return (
    <header className={styles.wrapper}>
      <Link href="/" className={styles.logo} onClick={closeMenu}>
        jack
      </Link>
      <div className={styles.right}>
        <nav className={styles.nav}>
          <Link href="/products" onClick={closeMenu}>
            プロダクト
          </Link>
          <Link href="/Members" onClick={closeMenu}>
            メンバー
          </Link>
          <Link href="/Activities" onClick={closeMenu}>
            活動内容
          </Link>
          <Link href="/Achievements" onClick={closeMenu}>
            活動実績
          </Link>
          <Link href="/FAQ" onClick={closeMenu}>
            FAQ
          </Link>
          <Link href="/blog" onClick={closeMenu}>
            ブログ
          </Link>
        </nav>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfOj8Twb_KlxPEr2whaQu2POouv_uFSJ27qUTc5cMWKEzxETw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contact}
        >
          体験応募はこちら
        </Link>
        {!showNav && (
          <button className={styles.menuButton} onClick={toggleNav}>
            <IoMdMenu size={24} />
          </button>
        )}
        {showNav && (
          <button className={styles.closeButton} onClick={closeMenu}>
            <IoClose size={24} />
          </button>
        )}
      </div>
      <div className={`${styles.menu} ${showNav ? styles.display : ""}`}>
        <button className={styles.black} onClick={closeMenu}></button>
        <div className={styles.menubar}>
          <nav className={styles.hamburgerNav}>
            <Link href="/products" onClick={closeMenu}>
              プロダクト
            </Link>
            <Link href="/Members" onClick={closeMenu}>
              メンバー
            </Link>
            <Link href="/Activities" onClick={closeMenu}>
              活動内容
            </Link>
            <Link href="/Achievements" onClick={closeMenu}>
              活動実績
            </Link>
            <Link href="/FAQ" onClick={closeMenu}>
              FAQ
            </Link>
            <Link href="/blog" onClick={closeMenu}>
              ブログ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
