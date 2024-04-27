import { StoryObj, Meta } from "@storybook/react";
import React from "react";
import { SelectProductionPresentation } from "./";

// プロダクトのサンプルデータ
const sampleProducts = [
  {
    image: "https://via.placeholder.com/150",
    title: "Product 1",
    text: "This is the first product",
    tags: ["web", "mobile"],
    web_href: "https://example.com/product1",
    app_href: undefined,
    google_href: undefined,
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Product 2",
    text: "This is the second product",
    tags: ["game"],
    web_href: undefined,
    app_href: "https://example.com/product2",
    google_href: "https://play.google.com/store/apps/details?id=com.example.product2",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Product 3",
    text: "This is the second product",
    tags: ["game"],
    web_href: undefined,
    app_href: "https://example.com/product2",
    google_href: "https://play.google.com/store/apps/details?id=com.example.product2",
  },
];

const meta: Meta<typeof SelectProductionPresentation> = {
  title: "features/SelectProduction",
  component: SelectProductionPresentation,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    products: {
      description: "An array of product objects",
      defaultValue: sampleProducts,
    },
  },
};

export default meta;

type Story = StoryObj<typeof SelectProductionPresentation>;

export const Default: Story = {
  args: {
    products: sampleProducts, // プロダクトのサンプルデータをpropsとして渡す
  },
};
