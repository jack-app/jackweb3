import { title } from "process";
import { text } from "stream/consumers";
import image from "next/image";
import type { Meta, StoryObj } from "@storybook/react";
import { ProductDetailItem } from "./";

type T = typeof ProductDetailItem;

const meta: Meta<T> = {
  title: "ui/ProductDetailItem",
  component: ProductDetailItem,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    product: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    product: {
      id: "48d1dcf0-6f7d-422e-9848-dbe2959a5bbb",
      image: "",
      title: "CODEDUEL",
      text: " ",
      description: [
        {
          type: "text",
          text: [Object],
          annotations: [Object],
          plain_text: "プログラミング言語",
          href: null,
        },
      ],
      detail: [
        {
          type: "paragraph",
          children: [
            {
              text: "kajnfi anflakn alwneflal laknflnaakdsfa alksnflkanlwenfklanasdfknalnewf akjnsldnfkaelfn",
            },
          ],
        },
      ],
      release_date: [
        {
          type: "text",
          text: [Object],
          annotations: [Object],
          plain_text: "20XX.XX.XX release",
          href: null,
        },
      ],
      tags: ["web", "game"],
      git_href: "https://github.com/jack-app/jackweb3/issues/45",
      web_href: "https://www.youtube.com/",
      app_href: null,
      google_href: null,
    },
  },
};
