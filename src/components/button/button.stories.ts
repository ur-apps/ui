import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: { control: { type: 'radio' } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Submit',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Submit',
  },
};

export const Large: Story = {
  args: {
    size: 'l',
    children: 'Submit',
  },
};

export const Small: Story = {
  args: {
    size: 's',
    children: 'Submit',
  },
};
