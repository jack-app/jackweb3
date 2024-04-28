import type { Meta, StoryObj } from "@storybook/react";
import { ActivitiesCarousel } from "./";

type T = typeof ActivitiesCarousel;

const meta: Meta<T> = {
  title: "ui/ActivitiesCarousel",
  component: ActivitiesCarousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    images: { control: "array" },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    images: ["activities/image_1.png", "activities/image_1.png", "activities/image_1.png"],
    interval: 5000,
  },
};
