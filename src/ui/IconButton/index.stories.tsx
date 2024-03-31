import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './';

type T = typeof IconButton;

const meta: Meta<T> = {
  title: 'ui/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { text: { control: "text" }, imgUrl: { control: "text" } },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    text: "IconButton",
    imgUrl: "https://www.svgrepo.com/show/109221/next.svg",
    onClick: () => console.log("Clicked"),
    size: "s"
  },
};
