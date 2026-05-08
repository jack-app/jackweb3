import Link from "next/link";
import React from "react";
import { PiPencilCircle } from "react-icons/pi";
import styles from "./index.module.scss";

type Props = {
  writerName: string;
  isLink?: boolean;
};

export const Writer: React.FC<Props> = ({ writerName, isLink = false }) => {
  return isLink ? (
    <Link href={`/blog/writer/${writerName}`}>
      <div className={styles.link}>
        <PiPencilCircle className={styles.image} />
        <span className={styles.name}>{writerName}</span>
      </div>
    </Link>
  ) : (
    <div className={styles.writer}>
      <PiPencilCircle className={styles.image} />
      <span className={styles.name}>{writerName}</span>
    </div>
  );
};
