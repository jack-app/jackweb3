import type { Meta, StoryObj } from '@storybook/react';
import { Heading2 } from './';

type T = typeof Heading2;

const meta: Meta<T> = {
  title: 'ui/Heading2',
  component: Heading2,
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
