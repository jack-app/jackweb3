import type { Meta, StoryObj } from "@storybook/react";
import { AchievementItem } from "./";

type T = typeof AchievementItem;

const meta: Meta<T> = {
  title: "ui/AchievementItem",
  component: AchievementItem,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    image: { control: "text" },
    date: { control: "text" },
    text: { control: "text" },
    article_href: { control: "text" },
    web_href: { control: "text" },
    app_href: { control: "text" },
    google_href: { control: "text" },
    git_href: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    image: "https://placehold.jp/200x200.png",
    date: "2021-01-01",
    text: "Title",
    article_href: "https://www.google.com/",
    web_href: "https://www.google.com/",
    app_href: "https://www.google.com/",
    google_href: "https://www.google.com/",
    git_href: "https://www.google.com/",
  },
};
