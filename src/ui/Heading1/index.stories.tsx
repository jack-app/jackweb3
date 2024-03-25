import type { Meta, StoryObj } from '@storybook/react';
import { Heading1 } from './';

type T = typeof Heading1;

const meta: Meta<T> = {
  title: 'ui/Heading1',
  component: Heading1,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { heading1: { control: "text" }, title: { control: "text" } },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    heading1: "Heading1",
    title: "タイトル",
    // onPageClick: () => console.log("click!")
  },
};
