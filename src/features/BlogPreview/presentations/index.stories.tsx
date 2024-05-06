import type { Meta, StoryObj } from "@storybook/react";
import { BlogPreviewPresentation } from ".";

type T = typeof BlogPreviewPresentation;

const meta: Meta<T> = {
  title: "features/Preview",
  component: BlogPreviewPresentation,
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
