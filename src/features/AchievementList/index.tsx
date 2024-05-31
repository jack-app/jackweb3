import React from "react";
import { useAchievement } from "@/features/AchievementList/hooks";
import { Props as AchievementItemProps } from "@/ui/AchievementItem";
import { AchievementListPresentation } from "./presentations/";

type Props = {
  achievements: AchievementItemProps[];
};

export const AchievementList: React.FC<Props> = ({ achievements }) => {
  const { sortedYear, groupedAchievement } = useAchievement(achievements);
  return (
    <AchievementListPresentation sortedYear={sortedYear} groupedAchievement={groupedAchievement} />
  );
};
