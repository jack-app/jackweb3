import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '.';

type T = typeof Footer;

const meta: Meta<T> = {
  title: 'ui/Footer',
  component: Footer,
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
