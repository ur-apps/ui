import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    color: { control: { type: 'radio' } },
  },
  args: {
    variant: 'filled',
    color: 'primary',
    shape: 'default',
    size: 'm',
    disabled: false,
    className: 'custom-class',
    children: 'Submit',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
};

export const Large: Story = {
  args: {
    color: 'danger',
    size: 'l',
  },
};

export const Small: Story = {
  args: {
    color: 'success',
    size: 's',
  },
};
