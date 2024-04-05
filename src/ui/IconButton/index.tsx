import React from "react";
import styles from "./index.module.scss";
import { IconType } from "react-icons";
import Link from "next/link";

type Props = {
  href: string;
  text: string;
  icon: IconType;
  size: "s" | "l";
};

export const IconButton: React.FC<Props> = ({ href, icon: Icon, text, size }) => {
  let btnClassName = `${styles.btn} `;
  if (size === "s") {
    btnClassName += `${styles.small}`;
  } else {
    btnClassName += `${styles.large}`;
  }

  return (
    <Link href={href} className={btnClassName}>
      <span className={styles.text}>{text}</span>
      <Icon className={styles.icon} width={24} height={24} />
    </Link>
  );
};
