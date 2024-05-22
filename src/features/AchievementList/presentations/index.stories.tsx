import type { Meta, StoryObj } from "@storybook/react";
import { AchievementListPresentation } from "./";

type T = typeof AchievementListPresentation;

const meta: Meta<T> = {
  title: "features/AchievementList",
  component: AchievementListPresentation,
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
