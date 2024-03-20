import type { Meta, StoryObj } from "@storybook/react";
import { ArticleItem } from ".";

type T = typeof ArticleItem;

const meta: Meta<T> = {
  title: "ui/ArticleItem",
  component: ArticleItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    image: { control: "text" },
    date: { control: "text" },
    title: { control: "text" },
    tags: { control: "array" },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    image: "https://placehold.jp/360x200.png",
    date: "2021-01-01",
    title: "Title",
    tags: ["tag1", "tag2"],
  },
};
