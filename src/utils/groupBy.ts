import { Props as AchievementItemProps } from "@/ui/AchievementItem";

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
