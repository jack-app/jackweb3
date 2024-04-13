import type { Meta, StoryObj } from "@storybook/react";
import { SelectProductionPresentation } from "./";

type T = typeof SelectProductionPresentation;

const meta: Meta<T> = {
  title: "features/SelectProduction",
  component: SelectProductionPresentation,
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
