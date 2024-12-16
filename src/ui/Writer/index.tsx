import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  writerName: string;
  writerImage: string;
  isLink?: boolean;
};

export const Writer: React.FC<Props> = ({ writerName, writerImage, isLink = false }) => {
  return isLink ? (
    <Link href={`/blog/writer/${writerName}`}>
      <div className={styles.link}>
        <img className={styles.image} src={writerImage} alt={writerName} width={24} height={24} />
        <span className={styles.name}>{writerName}</span>
      </div>
    </Link>
  ) : (
    <div className={styles.writer}>
      <img className={styles.image} src={writerImage} alt={writerName} width={24} height={24} />
      <span className={styles.name}>{writerName}</span>
    </div>
  );
};
