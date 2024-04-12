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
    text: "サイトの説明です。サイトの説明を書くことができます。サイトの説明を見ることもできます。",
    web_href: "https://www.google.com/",
    app_href: "https://www.google.com/",
    google_href: "https://www.google.com/",
  },
};
