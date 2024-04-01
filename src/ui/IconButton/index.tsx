import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  text: string;
  imgUrl: string;
  onClick: () => void;
  size: "s" | "l";
};

export const IconButton: React.FC<Props> = ({ text, imgUrl, onClick, size }) => {
  let btnClassName = `${styles.btn} `;
  if (size === "s") {
    btnClassName += `${styles.small}`;
  } else {
    btnClassName += `${styles.large}`;
  }
  return (
    <button className={btnClassName} onClick={onClick}>
      <span className={styles.text}>{text}</span>
      <Image src={imgUrl} alt="icon" className={styles.icon} width={24} height={24} />
    </button>
  );
};
