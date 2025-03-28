import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoLinkExternal } from "react-icons/go";
import styles from "./index.module.scss";
type Props = {};

export const Footer: React.FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Image
          src="/jack_logo.png"
          alt="jackロゴ"
          className={styles.logoImg}
          width={124}
          height={93}
        />
        <span>&copy;jack 2025</span>
      </div>
      <div className={styles.info}>
        <div className={styles.link}>
          リンク
          <ul className={styles.linklist}>
            <li>
              <Link
                href="https://twitter.com/jackapp_tmy"
                target="_blank"
                rel="noopener noreferrer"
              >
                公式X(旧Twitter)
              </Link>
              <GoLinkExternal size={16} />
            </li>
            <li>
              <Link
                href="https://twitter.com/jack20200001101"
                target="_blank"
                rel="noopener noreferrer"
              >
                新歓用X(旧Twitter)
              </Link>
              <GoLinkExternal size={16} />
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          お問い合わせ
          <ul className={styles.contactlist}>
            <li>
              <Link href="https://lin.ee/es5kIQR" target="_blank" rel="noopener noreferrer">
                <Image src="/LINE_icon.png" alt="line" width={40} height={40} />
              </Link>
            </li>
            <li>
              <Link href="mailto:jack.app.tmy@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image src="/mail_icon.png" alt="mail" width={40} height={32} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
