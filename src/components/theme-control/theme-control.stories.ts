import type { Meta, StoryObj } from '@storybook/react';

import { ThemeControl } from './theme-control';

const meta: Meta<typeof ThemeControl> = {
  title: 'Components/ThemeControl',
  component: ThemeControl,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
