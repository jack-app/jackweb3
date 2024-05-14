import React from "react";
import styles from "./index.module.scss";
import { AchievementItem, Props as AchievementItemProps } from "@/ui/AchievementItem";
import { Heading1 } from "@/ui/Heading1";
import { Heading2 } from "@/ui/Heading2";

type Props = {
  achievements: AchievementItemProps[];
};
export const AchievementsScreen: React.FC<Props> = ({ achievements }) => {
  return (
    <main>
      <Heading1 enTitle="Achievements" jaTitle="活動実績" />
      <div className={styles.achievements}>
        <div className={styles.years}>
          <Heading2 text="2023" />
          <div className={styles.content}></div>
        </div>
        <div className={styles.years}>
          <Heading2 text="2022" />
          <div className={styles.content}>
            {achievements.map((achievement) => (
              <AchievementItem key={achievement.id} {...achievement} />
            ))}
          </div>
        </div>
        <div className={styles.years}>
          <Heading2 text="2020" />
          <div className={styles.content}></div>
        </div>
      </div>
    </main>
  );
};
