import { RichText } from "@/types/block";
import { ProductionDetailProps } from "../Production";
import type { Meta, StoryObj } from "@storybook/react";
import { ProductDetailItem } from "./";

type T = typeof ProductDetailItem;

const sampleProducts: ProductionDetailProps[] = [
  {
    id: "1",
    image: "/test_picture.png",
    title: "TITLE",
    description: [
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
    detail: [
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
        plain_text: "This is a sample detail for the product.",
        href: undefined,
      },
    ],
    release_date: [
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
        plain_text: "2023-05-01",
        href: undefined,
      },
    ],
    tags: ["coding", "education"],
    git_href: "https://github.com/example/codeduel",
    web_href: "https://www.codeduel.com",
    app_href: null,
    google_href: null,
  },
];

const meta: Meta<T> = {
  title: "ui/ProductDetailItem",
  component: ProductDetailItem,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    product: {
      control: sampleProducts,
    },
  },
};

export default meta;

type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    product: sampleProducts[0],
  },
};
