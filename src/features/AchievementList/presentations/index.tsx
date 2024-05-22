import React from "react";
import styles from "./index.module.scss";
import { AchievementItem, Props as AchievementItemProps } from "@/ui/AchievementItem";
import { Heading2 } from "@/ui/Heading2";

type Props = {
  sortedYear: string[];
  groupedAchievement: AchievementItemProps[];
  // year: string;
  // achievment: string;
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
