import type { Meta, StoryObj } from '@storybook/react';

import { FAKE_COUNTRY_LIST } from 'data/fake';

import { Select } from './select';

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  argTypes: {
    multiple: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    shape: 'default',
    size: 'l',
    name: 'test_name',
    multiple: false,
    options: FAKE_COUNTRY_LIST,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    shape: 'round',
    prefix: 'countries:',
    size: 'm',
    name: 'test_name',
    multiple: true,
    options: FAKE_COUNTRY_LIST,
  },
};

export const Clear: Story = {
  args: {
    variant: 'clear',
    shape: 'brick',
    size: 's',
    name: 'test_name',
    multiple: true,
    options: FAKE_COUNTRY_LIST,
  },
};
