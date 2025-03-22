import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  component: Switch,
};

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
