import type { Meta, StoryObj } from "@storybook/react";
import { BlogPreviewUsage } from "./";

type T = typeof BlogPreviewUsage;

const meta: Meta<T> = {
  title: "ui/BlogPreviewUsage",
  component: BlogPreviewUsage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    notionPageId: {
      control: {
        type: "text",
      },
    },
    showPreview: {
      action: "showPreview",
    },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    notionPageId:
      "https://www.notion.so/Full-Calendar-Google-Calendar-d6f4e00a47f5452e9e356440725c7242?pvs=4",
    showPreview: () => {},
  },
};
