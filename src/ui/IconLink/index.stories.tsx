import { FaGithub } from "react-icons/fa";
import type { Meta, StoryObj } from "@storybook/react";
import { IconLink } from ".";

type T = typeof IconLink;

const meta: Meta<T> = {
  title: "ui/IconLink",
  component: IconLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text" },
    text: { control: "text" },
    icon: { control: "text" },
    openInNewTab: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Small: Story = {
  args: {
    href: "https://www.google.com/",
    text: "IconLink",
    icon: FaGithub,
    size: "s",
    openInNewTab: true,
  },
};

export const Large: Story = {
  args: {
    href: "https://www.google.com/",
    text: "IconLink",
    icon: FaGithub,
    size: "l",
    openInNewTab: false,
  },
};
