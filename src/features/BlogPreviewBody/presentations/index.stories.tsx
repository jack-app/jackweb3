import { TagType } from "@/ui/Tag";
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
  argTypes: {
    id: {
      control: {
        type: "text",
      },
    },
    blocks: {
      control: {
        type: "object",
      },
    },
    pageInfo: {
      control: {
        type: "object",
      },
    },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    id: "id",
    blocks: [],
    pageInfo: {
      title: "ブログ記事のタイトルです",
      writerName: "writer name",
      writerImage: "writer image",
      tags: [{ name: "tag", color: "red", id: "id" }] as TagType[],
      date: "2021-01-01",
    },
  },
};
