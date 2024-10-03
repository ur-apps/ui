import type { Meta, StoryObj } from '@storybook/react';

import { ThemeControl } from './theme-control';

const meta = {
  title: 'Components/ThemeControl',
  component: ThemeControl,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
