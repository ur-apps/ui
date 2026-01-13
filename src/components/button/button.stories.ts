import type { Meta, StoryObj } from '@storybook/react-vite';

import { ReactComponent as PlaceholderIcon } from 'icons/placeholder.svg';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    variant: { control: { type: 'inline-radio' } },
    color: { control: { type: 'inline-radio' } },
    shape: { control: { type: 'inline-radio' } },
    size: { control: { type: 'inline-radio' } },
    iconPosition: { control: { type: 'inline-radio' } },
  },
  args: {
    variant: 'filled',
    color: 'primary',
    shape: 'default',
    size: 'm',
    loading: false,
    disabled: false,
    iconPosition: 'before',
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

export const WithIcon: Story = {
  args: {
    color: 'primary',
    size: 'm',
    icon: PlaceholderIcon,
  },
};
