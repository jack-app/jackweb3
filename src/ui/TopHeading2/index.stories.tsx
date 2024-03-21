import type { Meta, StoryObj } from '@storybook/react';
import { TopHeading2 } from './';

type T = typeof TopHeading2;

const meta: Meta<T> = {
  title: 'ui/TopHeading2',
  component: TopHeading2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {},
};
