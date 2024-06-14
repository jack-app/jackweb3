import { StoryObj, Meta } from "@storybook/react";
import { Props as ProductionProps } from "@/ui/Production";
import { categories } from "../hooks";
import { SelectProductionPresentation } from "./";

// プロダクトのサンプルデータ
const sampleProducts: ProductionProps[] = [
  {
    image: "https://via.placeholder.com/150",
    title: "Product 1",
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
    tags: ["web", "mobile"],
    web_href: "https://example.com/product1",
    app_href: undefined,
    google_href: undefined,
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Product 2",
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
    tags: ["game"],
    web_href: undefined,
    app_href: "https://example.com/product2",
    google_href: "https://play.google.com/store/apps/details?id=com.example.product2",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Product 3",
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
    categories: {
      description: "An array of category strings",
      defaultValue: categories,
    },
    category: {
      description: "The selected category",
      defaultValue: "all",
    },
    setCategory: {
      description: "A function to set the category",
      action: "setCategory",
    },
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
    categories: categories,
    category: "all",
    setCategory: () => {},
    products: sampleProducts,
  },
};

export const WebCategory: Story = {
  args: {
    categories: categories,
    category: "web",
    setCategory: () => {},
    products: sampleProducts,
  },
};
