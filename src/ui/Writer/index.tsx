import Image from "next/image"; // Import the Image component from next/image
import React from "react";
import styles from "./index.module.scss";

type Props = {
  writerName: string;
  writerImage: string;
};

export const Writer: React.FC<Props> = ({ writerName, writerImage }) => {
  return (
    <div className={styles.link}>
      <Image className={styles.image} src={writerImage} alt={writerName} width={24} height={24} />
      <span className={styles.name}>{writerName}</span>
    </div>
  );
};
