import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./";

type T = typeof Header;

const meta: Meta<T> = {
  title: "ui/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {},
};
