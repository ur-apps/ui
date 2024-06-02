import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    shape: 'round',
    size: 'm',
    isLoading: false,
    disabled: false,
  },
};

export const WithText: Story = {
  args: {
    color: 'success',
    shape: 'default',
    size: 'm',
    isLoading: false,
    disabled: false,
    checkedChildren: 'safe mode',
    uncheckedChildren: 'unsafe mode',
  },
};
