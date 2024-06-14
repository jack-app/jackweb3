import type { Meta, StoryObj } from "@storybook/react";
import { MobileCalendar } from "./";

type T = typeof MobileCalendar;

const meta: Meta<T> = {
  title: "ui/MobileCalendar",
  component: MobileCalendar,
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
