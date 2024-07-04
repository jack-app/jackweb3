import type { Meta, StoryObj } from "@storybook/react";
import { TopHeading2 } from "./";

type T = typeof TopHeading2;

const meta: Meta<T> = {
  title: "ui/TopHeading2",
  component: TopHeading2,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: { title: { control: "text" } },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: { title: "Title" },
};
