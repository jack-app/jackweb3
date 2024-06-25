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
    writerImage: { control: "text" },
    isLink: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    writerName: "さっつん",
    writerImage:
      "https://s3-us-west-2.amazonaws.com/public.notion-static.com/6f332397-5c6b-445e-8d47-6e9192e786e8/IMG_0346.jpg",
    isLink: false,
  },
};
