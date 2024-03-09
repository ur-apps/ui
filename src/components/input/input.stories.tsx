import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    shape: 'default',
    size: 'l',
    placeholder: 'Placeholder',
    defaultValue: 'Hello World!',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    shape: 'round',
    size: 'm',
    placeholder: 'Placeholder',
    defaultValue: 'Hello World!',
  },
};

export const Clear: Story = {
  args: {
    variant: 'clear',
    shape: 'brick',
    size: 's',
    placeholder: 'Placeholder',
    defaultValue: 'Hello World!',
  },
};
