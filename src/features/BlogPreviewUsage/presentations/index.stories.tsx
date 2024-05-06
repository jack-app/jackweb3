import type { Meta, StoryObj } from "@storybook/react";
import { BlogPreviewUsagePresentation } from "./";

type T = typeof BlogPreviewUsagePresentation;

const meta: Meta<T> = {
  title: "features/BlogPreviewUsage",
  component: BlogPreviewUsagePresentation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    inputNotionPageId: {
      control: {
        type: "text",
      },
    },
    setInputNotionPageId: {
      action: "setPageId",
    },
    showPreviewAndSyncQueryParam: {
      action: "showPreview",
    },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    inputNotionPageId:
      "https://www.notion.so/Full-Calendar-Google-Calendar-d6f4e00a47f5452e9e356440725c7242?pvs=4",
    setInputNotionPageId: () => {},
    showPreviewAndSyncQueryParam: () => {},
  },
};
