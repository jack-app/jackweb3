import Link from "next/link"
import React from 'react';
import styles from './index.module.scss';

type Props = {};

export const Footer: React.FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}><img src="" alt="jackロゴ" /></div>
      <div className={styles.info}>
        <div className={styles.link}>リンク
          <ul className={styles.linklist}>
            <li><Link href="">公式サイト<img src="" alt="jump" /></Link></li>
            <li><Link href="">公式X(旧Twitter)<img src="" alt="jump" /></Link></li>
            <li><Link href="">新歓用X(旧Twitter)<img src="" alt="jump" /></Link></li>
          </ul>
        </div>
        <div className={styles.contact}>お問い合わせ
          <ul className={styles.contactlist}>
            <li><Link href="" target="_blank">
              <img src="src\public\LINE_Brand_icon 1.png" alt="line" />
            </Link></li>
            <li><Link href="src\public\logo-black 1.png" target="_blank">
              <img src="" alt="x" />
            </Link></li>
            <li><Link href="" target="_blank">
              <img src="" alt="mail" />
            </Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};