import type { Meta, StoryObj } from '@storybook/react';
import { BlogArticleTocPresentation } from './';

type T = typeof BlogArticleTocPresentation;

const meta: Meta<T> = {
  title: 'features/BlogArticleToc',
  component: BlogArticleTocPresentation,
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