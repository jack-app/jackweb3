import type { Meta, StoryObj } from "@storybook/react";
import { Production } from "./";

type T = typeof Production;

const meta: Meta<T> = {
  title: "ui/Production",
  component: Production,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    image: { control: "text" },
    title: { control: "text" },
    text: { control: "text" },
    web_href: { control: "text" },
    app_href: { control: "text" },
    google_href: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    image: "https://placehold.jp/352x200.png",
    title: "jack-web",
    text: [
      {
        text: undefined,
        annotations: {
          bold: false,
          italic: false,
          strikethrough: false,
          underline: false,
          code: false,
          color: "",
        },
        plain_text: "This is a sample description for the product.",
        href: undefined,
      },
    ],
    web_href: "https://www.google.com/",
    app_href: "https://www.google.com/",
    google_href: "https://www.google.com/",
  },
};
