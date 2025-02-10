import type { Meta, StoryObj } from '@storybook/react';

import { ReactComponent as InfoIconFilled } from 'icons/info.circle.filled.svg';
import { ReactComponent as InfoIconOutlined } from 'icons/info.circle.outlined.svg';
import { ReactComponent as MagnifyingglassIconOutlined } from 'icons/magnifyingglass.outlined.svg';

import { Input } from './input';

const meta = {
  title: 'Form/Input',
  component: Input,
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

export const LeftIcon: Story = {
  args: {
    variant: 'filled',
    shape: 'default',
    size: 'm',
    placeholder: 'Search',
    iconLeft: MagnifyingglassIconOutlined,
  },
};

export const RightIcon: Story = {
  args: {
    variant: 'filled',
    shape: 'round',
    size: 'm',
    placeholder: 'password',
    defaultValue: 'Hello World!',
    iconRight: InfoIconFilled,
  },
};

export const WithLeftAndRightIcon: Story = {
  args: {
    variant: 'outlined',
    shape: 'round',
    size: 'm',
    placeholder: 'placeholder',
    defaultValue: 'Hello World!',
    iconLeft: MagnifyingglassIconOutlined,
    iconRight: InfoIconOutlined,
  },
};

export const WithPrefix: Story = {
  args: {
    variant: 'filled',
    shape: 'round',
    size: 'm',
    placeholder: 'Placeholder',
    defaultValue: 'Hello World!',
    prefix: 'Your name:',
  },
};

export const WithPostfix: Story = {
  args: {
    type: 'number',
    variant: 'filled',
    shape: 'default',
    size: 'm',
    placeholder: 'speed',
    defaultValue: '120',
    postfix: 'km/h',
    style: { width: '60px', textAlign: 'right' },
  },
};

export const WithPrefixAndPostfix: Story = {
  args: {
    type: 'email',
    variant: 'filled',
    shape: 'default',
    size: 'm',
    placeholder: 'Placeholder',
    defaultValue: 'john_doe',
    prefix: 'email:',
    postfix: '@gmail.com',
    style: { textAlign: 'right' },
  },
};
