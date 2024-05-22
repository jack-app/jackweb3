import React from "react";
import styles from "./index.module.scss";
import { AchievementList } from "@/features/AchievementList";
import { Props as AchievementItemProps } from "@/ui/AchievementItem";
import { Heading1 } from "@/ui/Heading1";
import { groupBy } from "@/utils/groupBy";

type Props = {
  achievements: AchievementItemProps[];
};
export const AchievementsScreen: React.FC<Props> = ({ achievements }) => {
  const groupedAchievement = groupBy(achievements, (achievement) => {
    return new Date(achievement.date).getFullYear().toString();
  });

  const sortedYear = Object.keys(groupedAchievement).sort((a, b) => (a > b ? -1 : 1));
  return (
    <main>
      <Heading1 enTitle="Achievements" jaTitle="活動実績" />
      <AchievementList achievements={achievements} />
    </main>
  );
};
