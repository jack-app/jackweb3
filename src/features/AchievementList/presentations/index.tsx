import React from "react";
import { AchievementItem, Props as AchievementItemProps } from "@/ui/AchievementItem";
import { Heading2 } from "@/ui/Heading2";
import styles from "./index.module.scss";

type Props = {
  sortedYear: string[];
  groupedAchievement: Record<string, AchievementItemProps[]>;
};

export const AchievementListPresentation: React.FC<Props> = ({
  sortedYear,
  groupedAchievement,
}) => {
  return (
    <div className={styles.wrapper}>
      {sortedYear.map((year) => (
        <div key={year} className={styles.year}>
          <Heading2 text={year} />
          <div className={styles.content}>
            {groupedAchievement[year].map((achievement) => (
              <AchievementItem key={achievement.id} {...achievement} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
