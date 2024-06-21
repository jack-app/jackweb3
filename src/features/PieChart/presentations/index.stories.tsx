import { Meta, StoryObj } from "@storybook/react";
import { PieChartPresentation } from "./";

type T = typeof PieChartPresentation;

const meta: Meta<T> = {
  title: "features/PieChart",
  component: PieChartPresentation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: "object",
      description: "Pie chart data",
    },
  },
};

export default meta;

type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    data: [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
      { name: "Group D", value: 200 },
    ],
  },
};
