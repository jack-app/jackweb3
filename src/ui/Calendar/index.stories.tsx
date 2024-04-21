import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './';

type T = typeof Calendar;

const meta: Meta<T> = {
  title: 'ui/Calendar',
  component: Calendar,
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
