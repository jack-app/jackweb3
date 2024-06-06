import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import styles from "./index.module.scss";

type Props = {
  href: string;
  text: string;
  icon: IconType;
  size: "s" | "l";
  openInNewTab?: boolean;
};

export const IconLink: React.FC<Props> = ({
  href,
  icon: Icon,
  text,
  size,
  openInNewTab = false,
}) => {
  let btnClassName = `${styles.btn} `;
  if (size === "s") {
    btnClassName += `${styles.small}`;
  } else {
    btnClassName += `${styles.large}`;
  }

  const targetProps = openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link href={href} className={btnClassName} {...targetProps}>
      <span className={styles.text}>{text}</span>
      <Icon className={styles.icon} width={24} height={24} />
    </Link>
  );
};
