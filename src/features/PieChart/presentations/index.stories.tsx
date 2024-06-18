import type { Meta, StoryObj } from "@storybook/react";
import { PieChartPresentation } from "./";

type T = typeof PieChartPresentation;

const meta: Meta<T> = {
  title: "features/PieChart",
  component: PieChartPresentation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {},
};
