import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./";

type T = typeof IconButton;

const meta: Meta<T> = {
  title: "ui/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: { text: { control: "text" }, imgUrl: { control: "text" } },
};

export default meta;
type Story = StoryObj<T>;

export const Small: Story = {
  args: {
    text: "IconButton",
    imgUrl: "https://placehold.jp/24x24.png",
    onClick: () => console.log("Clicked"),
    size: "s",
  },
};

export const Large: Story = {
  args: {
    text: "IconButton",
    imgUrl: "https://placehold.jp/24x24.png",
    onClick: () => console.log("Clicked"),
    size: "l",
  },
};
