import type { Meta, StoryObj } from "@storybook/react";
import { Writer } from "./";

type T = typeof Writer;

const meta: Meta<T> = {
  title: "ui/Writer",
  component: Writer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    writerName: { control: "text" },
    isLink: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    writerName: "さっつん",
    isLink: false,
  },
};
