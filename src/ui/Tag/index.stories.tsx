import { colors } from "./logics";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./";

type T = typeof Tag;

const meta: Meta<T> = {
  title: "ui/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    color: { control: "select", options: colors },
    isLink: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    name: "Tag",
    color: "blue",
    isLink: false,
  },
};

export const Link: Story = {
  args: {
    name: "Tag",
    color: "blue",
    isLink: true,
  },
};
