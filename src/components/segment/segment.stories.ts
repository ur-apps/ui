import type { Meta, StoryObj } from '@storybook/react';

import { ReactComponent as SunIcon } from 'icons/sun.max.filled.svg';

import { Segment } from './segment';

const meta = {
  title: 'Base/Segment',
  component: Segment,
  args: {
    variant: 'filled',
    color: 'primary',
    shape: 'default',
    size: 'm',
    type: 'radio',
    label: 'Label',
    value: 'value',
  },
  argTypes: {
    color: { control: 'radio' },
  },
} satisfies Meta<typeof Segment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'language',
    value: 'eng',
    label: 'English',
  },
};

export const WithIcon: Story = {
  args: {
    type: 'checkbox',
    value: 'light',
    icon: SunIcon,
  },
};
