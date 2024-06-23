import { StoryObj, Meta } from "@storybook/react";
import { BlogPreviewPresentation } from ".";

type T = typeof BlogPreviewPresentation;

const meta: Meta<T> = {
  title: "features/Preview",
  component: BlogPreviewPresentation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: {
        type: "boolean",
      },
    },
    notionId: {
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
    notionPageId: {
      control: {
        type: "text",
      },
    },
    inputNotionURL: {
      control: {
        type: "text",
      },
    },
    setInputNotionURL: {
      control: {
        type: "function",
      },
    },
    reloadPreview: {
      control: {
        type: "function",
      },
    },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    loading: false,
    notionId: "notionId",
    blocks: [],
    pageInfo: {
      title: "記事タイトル",
      writerName: "Writer Name",
      writerImage: "Writer Image",
      tags: [
        { id: "tag id", name: "tagname", color: "blue" },
        { id: "tag id2", name: "tagname2", color: "orange" },
      ],
      date: "2021-09-01",
    },
    notionPageId: "notionPageId",
    inputNotionURL: "inputNotionURL",
    setInputNotionURL: () => {},
    reloadPreview: () => {},
  },
};
