export const colors = [
  "blue",
  "brown",
  "default",
  "gray",
  "green",
  "orange",
  "pink",
  "purple",
  "red",
  "yellow",
] as const;

export type Color = (typeof colors)[number];

export const convertToColor = {
  blue: "#6AC3E9",
  brown: "#946969",
  default: "#747474",
  gray: "#B5B5B5",
  green: "#86CA88",
  orange: "#E9B66A",
  pink: "#DD9ADE",
  purple: "#AC7DDB",
  red: "#E07171",
  yellow: "#EAD66D",
} as const;
