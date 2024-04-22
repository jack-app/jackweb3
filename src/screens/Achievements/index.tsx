import React from "react";
import styles from "./index.module.scss";
import { Heading1 } from "@/ui/Heading1";
import { Heading2 } from "@/ui/Heading2";

type Props = {};

export const AchievementsScreen: React.FC<Props> = (props) => {
  return (
    <main>
      <Heading1 enTitle="Achievements" jaTitle="活動実績" />
      <div className={styles.years}>
        <Heading2 text="2023" />
        <div className={styles.content}></div>
      </div>
      <div className={styles.years}>
        <Heading2 text="2022" />
        <div className={styles.content}></div>
      </div>
      <div className={styles.years}>
        <Heading2 text="2020" />
        <div className={styles.content}></div>
      </div>
      <div className={styles.articlesWrapper}></div>
    </main>
  );
};
