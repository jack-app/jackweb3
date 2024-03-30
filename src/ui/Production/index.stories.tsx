import type { Meta, StoryObj } from '@storybook/react';
import { Production } from './';

type T = typeof Production;

const meta: Meta<T> = {
  title: 'ui/Production',
  component: Production,
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
