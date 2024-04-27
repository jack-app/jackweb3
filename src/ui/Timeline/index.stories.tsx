import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './';

type T = typeof Timeline;

const meta: Meta<T> = {
  title: 'ui/Timeline',
  component: Timeline,
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
