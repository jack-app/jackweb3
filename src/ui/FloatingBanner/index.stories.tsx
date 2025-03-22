import type { Meta, StoryObj } from '@storybook/react';
import { FloatingBanner } from './';

type T = typeof FloatingBanner;

const meta: Meta<T> = {
  title: 'ui/FloatingBanner',
  component: FloatingBanner,
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
