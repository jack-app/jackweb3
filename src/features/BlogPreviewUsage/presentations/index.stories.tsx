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
    inputNotionURL: {
      control: {
        type: "text",
      },
    },
    setInputNotionURL: {
      action: "setInputNotionPageId",
    },
    showPreviewFromNotionURL: {
      action: "showPreviewAndSyncQueryParam",
    },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    inputNotionURL:
      "https://www.notion.so/Full-Calendar-Google-Calendar-d6f4e00a47f5452e9e356440725c7242?pvs=4",
    setInputNotionURL: () => {},
    showPreviewFromNotionURL: () => {},
  },
};
