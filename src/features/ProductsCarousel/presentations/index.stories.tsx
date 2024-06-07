import { StoryObj, Meta } from "@storybook/react";
import { ProductionDetailProps } from "@/ui/Production";
import { ProductsCarouselPresentation } from "./";

type T = typeof ProductsCarouselPresentation;

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
  title: "features/ProductsCarousel",
  component: ProductsCarouselPresentation,
  parameters: {
    controls: { expanded: true },
  },
  tags: ["autodocs"],
  argTypes: {
    handlePrevButton: { action: "handlePrevButton" },
    handleNextButton: { action: "handleNextButton" },
    handleRadioButton: { action: "handleRadioButton" },
    products: { control: sampleProducts },
    selectedIndex: { control: { type: "number" } },
    emblaRef: { control: { type: "object" } },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    products: sampleProducts,
    selectedIndex: 0,
  },
};
