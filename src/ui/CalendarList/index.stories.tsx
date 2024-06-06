import type { Meta, StoryObj } from '@storybook/react';
import { CalendarList } from './';

type T = typeof CalendarList;

const meta: Meta<T> = {
  title: 'ui/CalendarList',
  component: CalendarList,
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
