import { type } from "os";
import { StoryObj, Meta } from "@storybook/react";
// import { Default } from "@/ui/Accordion/index.stories";
import { images } from "../hooks/data";
import { ActivitiesCarouselPresentation } from "./";

type T = typeof ActivitiesCarouselPresentation;

const meta: Meta<T> = {
  title: "features/ActivitiesCarousel",
  component: ActivitiesCarouselPresentation,
  parameters: {
    controls: { expanded: true },
  },
  tags: ["autodocs"],
  argTypes: {
    handlePrevButton: { action: "handlePrevButton" },
    handleNextButton: { action: "handleNextButton" },
    handleRadioButton: { action: "handleRadioButton" },
    images: { control: { type: "array" } },
    selectedIndex: { control: { type: "number" } },
    emblaRef: { control: { type: "object" } },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    // handlePrevButton: () => console.log("handlePrevButton"),
    // handleNextButton: () => console.log("handleNextButton"),
    // handleRadioButton: (index: number) => console.log("handleRadioButton", index),
    images: images,
    selectedIndex: 0,
    // emblaRef: {},
  },
};
