import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./";
import { FaGithub } from "react-icons/fa";

type T = typeof IconButton;

const meta: Meta<T> = {
  title: "ui/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text" },
    text: { control: "text" },
    icon: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Small: Story = {
  args: {
    href: "https://www.google.com/",
    text: "IconButton",
    icon: FaGithub,
    size: "s",
  },
};

export const Large: Story = {
  args: {
    href: "https://www.google.com/",
    text: "IconButton",
    icon: FaGithub,
    size: "l",
  },
};
