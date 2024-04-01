import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./";

type T = typeof Accordion;

const meta: Meta<T> = {
  title: "ui/Accordion",
  component: Accordion,
  parameters: {
    controls: { expanded: true },
  },
  tags: ["autodocs"],
  argTypes: { question: { control: "text" }, answer: { control: "text" } },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    question: "question",
    answer: "answer",
  },
};
