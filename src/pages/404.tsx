import Image from "next/image";
import React from "react";
import styles from "./404.module.scss";
export default function Custom404() {
  return (
    <main className={styles.container}>
      <Image
        className={styles.img404}
        src="/404.png"
        alt="お探しのページが見つかりません"
        width={1280}
        height={300}
      />
    </main>
  );
}
