import type { Meta, StoryObj } from '@storybook/react';
import { Heading1 } from './';

type T = typeof Heading1;

const meta: Meta<T> = {
  title: 'ui/Heading1',
  component: Heading1,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: { text: { control: "text" }, title: { control: "text" } },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    text: "Heading1",
    title: "タイトル",
  },
};
