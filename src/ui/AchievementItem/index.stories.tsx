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
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    image: "https://placehold.jp/200x200.png",
    date: "2021-01-01",
    text: "Title",
  },
};
