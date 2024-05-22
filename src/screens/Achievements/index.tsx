import React from "react";
import styles from "./index.module.scss";
import { AchievementList } from "@/features/AchievementList";
import { Props as AchievementItemProps } from "@/ui/AchievementItem";
import { Heading1 } from "@/ui/Heading1";

type Props = {
  achievements: AchievementItemProps[];
};
export const AchievementsScreen: React.FC<Props> = ({ achievements }) => {
  return (
    <main>
      <Heading1 enTitle="Achievements" jaTitle="活動実績" />
      <AchievementList achievements={achievements} />
    </main>
  );
};
