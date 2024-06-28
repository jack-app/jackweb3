import Link from "next/link";
import React from "react";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FORM_URL } from "@/constants";
import styles from "./index.module.scss";

type Props = {};

export const Header: React.FC<Props> = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
    document.body.style.overflow = "hidden"; // stop scroll when menu is open
  };
  const closeMenu = () => {
    setShowNav(false);
    document.body.style.overflow = "auto";
  };
  return (
    <header className={styles.wrapper}>
      <Link href="/" className={styles.logo} onClick={closeMenu}>
        jack
      </Link>
      <div className={styles.right}>
        <nav className={styles.nav}>
          <Link href="/products" onClick={closeMenu} className={styles.hamburgerNavName}>
            プロダクト
          </Link>
          <Link href="/members" onClick={closeMenu} className={styles.hamburgerNavName}>
            メンバー
          </Link>
          <Link href="/activities" onClick={closeMenu} className={styles.hamburgerNavName}>
            活動内容
          </Link>
          <Link href="/achievements" onClick={closeMenu} className={styles.hamburgerNavName}>
            活動実績
          </Link>
          <Link href="/faq" onClick={closeMenu} className={styles.hamburgerNavName}>
            FAQ
          </Link>
          <Link href="/blog" onClick={closeMenu} className={styles.hamburgerNavName}>
            ブログ
          </Link>
        </nav>
        <Link href={FORM_URL} target="_blank" rel="noopener noreferrer" className={styles.contact}>
          見学申し込み
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
            <Link href="/products" onClick={closeMenu} className={styles.hamburgerNavName}>
              プロダクト
            </Link>
            <Link href="/members" onClick={closeMenu} className={styles.hamburgerNavName}>
              メンバー
            </Link>
            <Link href="/activities" onClick={closeMenu} className={styles.hamburgerNavName}>
              活動内容
            </Link>
            <Link href="/achievements" onClick={closeMenu} className={styles.hamburgerNavName}>
              活動実績
            </Link>
            <Link href="/faq" onClick={closeMenu} className={styles.hamburgerNavName}>
              FAQ
            </Link>
            <Link href="/blog" onClick={closeMenu} className={styles.hamburgerNavName}>
              ブログ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
