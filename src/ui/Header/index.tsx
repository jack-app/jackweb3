import Link from "next/link";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import styles from "./index.module.scss";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

type Props = {};

export const Header: React.FC<Props> = (props) => {
  return (
    <header className={styles.wrapper}>
      <Link href="/" className={styles.logo}>
        jack
      </Link>
      <div className={styles.right}>
        <nav className={styles.nav} >
          <Link href="/products">プロダクト</Link>
          <Link href="/Members" >メンバー</Link>
          <Link href="/Activities" >活動内容</Link>
          <Link href="/Achievements">活動実績</Link>
          <Link href="/FAQ">FAQ</Link>
          <Link href="/blog" >ブログ</Link>
        </nav>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfOj8Twb_KlxPEr2whaQu2POouv_uFSJ27qUTc5cMWKEzxETw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contact}
        >
          体験応募はこちら
        </Link>
        <div className={styles.hamburger_menu}>
          <input type="checkbox" id={styles.check1} className={styles.menu_btn_check} />
          <label htmlFor={styles.check1} className={styles.menubtn}><span className={styles.a}>a</span>
            {/* <IoMdMenu size={24} className={styles.hamburger_btn} /> */}
          </label>
          {/* <input type="checkbox" id={styles.check2} className={styles.menu_btn_check} />
          <label htmlFor={styles.check2} className={styles.menubtn}>
            <IoClose size={24} className={styles.close_btn} />
          </label> */}
          <div className={styles.ham_btn}>
            <IoMdMenu size={24} className={styles.hamburger_btn} />
          </div>
          <div className={styles.clo_btn}>
            <IoClose size={24} className={styles.close_btn} />
          </div>
          <div className={styles.menu}>
            <button className={styles.black} ></button>
            <div className={styles.menubar}>
              <nav className={styles.hamburgerNav} >
                <Link href="/products">プロダクト</Link>
                <Link href="/Members" >メンバー</Link>
                <Link href="/Activities" >活動内容</Link>
                <Link href="/Achievements">活動実績</Link>
                <Link href="/FAQ">FAQ</Link>
                <Link href="/blog" >ブログ</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};
