import type { Meta, StoryObj } from "@storybook/react";
import { AchievementListPresentation } from "./";

type T = typeof AchievementListPresentation;

const sampleYears = ["2024", "2023", "2022"];

type Achievement = {
  id: string;
  date: string;
  text: string;
  image: string;
  article_href: string;
  web_href: string;
  app_href: string;
  google_href: string;
  git_href: string;
};

const sampleAchievements: Record<string, Achievement[]> = {
  "2024": [
    {
      id: "2024",
      date: "2024-06-02",
      text: "test1",
      image: "https://placehold.jp/200x200.png",
      article_href: "https://ejje.weblio.jp/content/test",
      web_href: "https://www.youtube.com/",
      app_href: " https://www.youtube.com/",
      google_href: "https://www.youtube.com/",
      git_href: "https://github.com/jack-app/jackweb3/issues/45",
    },
    {
      id: "2024",
      date: "2024-05-20",
      text: "testtesttesttesttesttesttesttest4",
      image: "",
      article_href: "",
      web_href: "",
      app_href: "",
      google_href: "",
      git_href: "",
    },
  ],
  "2023": [
    {
      id: "2023",
      date: "2023-05-15",
      text: "test2",
      image: "https://placehold.jp/200x200.png",
      article_href: "https://ejje.weblio.jp/content/test",
      web_href: "",
      app_href: " ",
      google_href: "",
      git_href: "",
    },
  ],
  "2022": [
    {
      id: "2022",
      date: "2022-05-14",
      text: "test3",
      image: "",
      article_href: "",
      web_href: "",
      app_href: " ",
      google_href: "https://www.youtube.com/",
      git_href: "https://github.com/jack-app/jackweb3/issues/45",
    },
  ],
};

const meta: Meta<T> = {
  title: "features/AchievementList",
  component: AchievementListPresentation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    sortedYear: { control: sampleYears },
    groupedAchievement: { control: sampleAchievements },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    sortedYear: sampleYears,
    groupedAchievement: sampleAchievements,
  },
};
