// import { groupedAchievement } from "@/screens/Achievements";
import { AchievementItem, Props as AchievementItemProps } from "@/ui/AchievementItem";
// import { groupBy } from "@/utils/groupBy";

type WithDate = {
  date: string;
};

export function groupBy<T extends WithDate>(array: T[], getKey: (item: T) => string | number) {
  const grouped = array.reduce(
    (acc, item) => {
      const key = getKey(item);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    },
    {} as Record<string | number, T[]>,
  );

  Object.keys(grouped).forEach((key) => {
    grouped[key].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });

  return grouped;
}

export type UseAchievement = (achievements: AchievementItemProps[]) => {
  sortedYear: string[];
  groupedAchievement: any;
};
export const useAchievement: UseAchievement = (achievements) => {
  const groupedAchievement = groupBy(achievements, (achievement) => {
    return new Date(achievement.date).getFullYear().toString();
  });

  const sortedYear = Object.keys(groupedAchievement).sort((a, b) => (a > b ? -1 : 1));
  return { sortedYear, groupedAchievement };
};
