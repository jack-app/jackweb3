import type { Meta, StoryObj } from "@storybook/react";
import { ArticleTitle } from "./";

type T = typeof ArticleTitle;

const meta: Meta<T> = {
  title: "ui/ArticleTitle",
  component: ArticleTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    writerName: { control: "text" },
    writerImage: { control: "text" },
    tags: { control: "object" },
    date: { control: "date" },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    title: "jackHack2024",
    writerName: "さっつん",
    writerImage:
      "https://s3-us-west-2.amazonaws.com/public.notion-static.com/6f332397-5c6b-445e-8d47-6e9192e786e8/IMG_0346.jpg",
    tags: [
      { id: "1", name: "React", color: "blue" },
      { id: "2", name: "Next.js", color: "green" },
    ],
    date: "2022-01-01",
  },
};
