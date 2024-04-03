import type { Meta, StoryObj } from '@storybook/react';
import { ActivitiesCarousel } from './';

type T = typeof ActivitiesCarousel;

const meta: Meta<T> = {
  title: 'ui/ActivitiesCarousel',
  component: ActivitiesCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    images: { control: "array" },
    interval: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    images: ["https://placehold.jp/360x200.png", "https://placehold.jp/360x200.png", "https://placehold.jp/360x200.png"],
    interval: 5000,
  },
};
