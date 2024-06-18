export type PieChartDataType = {
  name: string;
  value: number;
};

export const universityData: PieChartDataType[] = [
  { name: "名古屋大学", value: 85 },
  { name: "他大学", value: 14 },
];

export const sexData: PieChartDataType[] = [
  { name: "男性", value: 85 },
  { name: "女性", value: 15 },
];

export const facultyData: PieChartDataType[] = [
  { name: "情報学部", value: 62 },
  { name: "工学部", value: 16 },
  { name: "その他", value: 21 },
];
