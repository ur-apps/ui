import type { Meta, StoryObj } from '@storybook/react';

import { FAKE_COUNTRY_LIST } from 'data/fake';

import { Dropdown } from './dropdown';

const meta = {
  title: 'Base/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const style: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '200px',
  transform: 'translate(-50%, -50%)',
};

export const Filled: Story = {
  args: {
    isOpen: true,
    variant: 'filled',
    shape: 'default',
    size: 'l',
    name: 'test_name',
    multiple: true,
    options: FAKE_COUNTRY_LIST,
    style,
  },
};

export const Outlined: Story = {
  args: {
    isOpen: true,
    variant: 'outlined',
    shape: 'round',
    size: 's',
    name: 'test_name',
    multiple: false,
    options: FAKE_COUNTRY_LIST,
    style,
  },
};

export const Clear: Story = {
  args: {
    isOpen: true,
    variant: 'clear',
    shape: 'brick',
    size: 'm',
    name: 'test_name',
    multiple: false,
    options: FAKE_COUNTRY_LIST,
    style,
  },
};
