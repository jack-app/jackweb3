import Link from "next/link"
import React from 'react';
import styles from './index.module.scss';
import { GoLinkExternal } from "react-icons/go";
type Props = {};

export const Footer: React.FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src="/Frame 90.png" alt="jackロゴ" />
        <span>&copy;jack 2024</span>
      </div>
      <div className={styles.info}>
        <div className={styles.link}>リンク
          <ul className={styles.linklist}>
            <li><Link href="https://twitter.com/jackapp_tmy" target="_blank" rel="noopener noreferrer" >公式X(旧Twitter)<span className="icon"><GoLinkExternal /></span></Link></li>
            <li><Link href="https://twitter.com/jack20200001101" target="_blank" rel="noopener noreferrer" >新歓用X(旧Twitter)<GoLinkExternal /></Link></li>
          </ul>
        </div>
        <div className={styles.contact}>お問い合わせ
          <ul className={styles.contactlist}>
            <li><Link href="https://line.me/ti/p/@jnm6180c" target="_blank" rel="noopener noreferrer" >
              <img src="LINE_Brand_icon 1.png" alt="line" />
            </Link></li>
            <li><Link href="https://twitter.com/jackapp_tmy" target="_blank" rel="noopener noreferrer" >
              <img src="/logo-black 1.png" alt="x" />
            </Link></li>
            <li><Link href="mailto:jack.app.tmy@gmail.com" target="_blank" rel="noopener noreferrer" >
              <img src="/Vector.png" alt="mail" />
            </Link></li>
          </ul>

        </div>
      </div>
    </div>
  );
};