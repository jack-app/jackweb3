import Link from "next/link"
import React from 'react';
import styles from './index.module.scss';

type Props = {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
  size: "s" | "m" | "l";
};

export const IconButton: React.FC<Props> = ({ text, icon, onClick, size }) => {
  let btnClassName = `${styles.btn} `;
  if (size === "s") {
    btnClassName += `${styles.small}`;
  }
  else if (size === "m") {
    btnClassName += `${styles.medium}`;
  }
  else {
    btnClassName += `${styles.large}`;
  }
  return (
    <div className={btnClassName} onClick={onClick}>
      <span className={styles.text}>{text}</span>
      <span className={styles.icon}>{icon}</span>
    </div>
  );
};