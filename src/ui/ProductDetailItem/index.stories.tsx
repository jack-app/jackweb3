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
    number: { control: "text" },
    image: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    number: "00",
    image: "https://placehold.jp/244x244.png",
    title: "CODEDUEL",
    description: "asdkalsg",
  },
};
