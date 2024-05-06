import type { Meta, StoryObj } from "@storybook/react";
import { BlogPreviewBodyPresentation } from ".";

type T = typeof BlogPreviewBodyPresentation;

const meta: Meta<T> = {
  title: "features/PreviewBody",
  component: BlogPreviewBodyPresentation,
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
