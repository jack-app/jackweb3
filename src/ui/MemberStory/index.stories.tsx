import type { Meta, StoryObj } from '@storybook/react';
import { MemberStory } from './';

type T = typeof MemberStory;

const meta: Meta<T> = {
  title: 'ui/MemberStory',
  component: MemberStory,
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
