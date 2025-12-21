import type { Meta, StoryObj } from '@storybook/react-vite';

import { ReactComponent as InfoIconFilled } from 'icons/info.circle.filled.svg';
import { ReactComponent as InfoIconOutlined } from 'icons/info.circle.outlined.svg';
import { ReactComponent as MagnifyingglassIconOutlined } from 'icons/magnifyingglass.outlined.svg';

import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
  args: {
    type: 'text',
    variant: 'filled',
    shape: 'default',
    size: 'l',
    status: 'default',
    hint: '',
    disabled: false,
    placeholder: 'placeholder',
    defaultValue: 'Hello World!',
  },
  argTypes: {
    variant: { control: 'inline-radio' },
    shape: { control: 'inline-radio' },
    size: { control: 'inline-radio' },
    status: { control: 'inline-radio' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    shape: 'default',
    size: 'l',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    shape: 'round',
    size: 'm',
  },
};

export const Clear: Story = {
  args: {
    variant: 'clear',
    shape: 'brick',
    size: 's',
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
    iconRight: InfoIconFilled,
  },
};

export const WithLeftAndRightIcon: Story = {
  args: {
    variant: 'outlined',
    shape: 'round',
    size: 'm',
    iconLeft: MagnifyingglassIconOutlined,
    iconRight: InfoIconOutlined,
  },
};

export const WithPrefix: Story = {
  args: {
    variant: 'filled',
    shape: 'round',
    size: 'm',
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
    defaultValue: 'john_doe',
    placeholder: 'gmail',
    prefix: 'email:',
    postfix: '@gmail.com',
    style: { textAlign: 'right' },
  },
};

export const WithHint: Story = {
  args: {
    type: 'password',
    variant: 'filled',
    shape: 'default',
    size: 'm',
    defaultValue: '12345',
    placeholder: 'password',
    prefix: 'password:',
    status: 'danger',
    hint: (
      <ul style={{ margin: 0, padding: '0px 12px' }}>
        <li>Your password must be at least 8 characters long</li>
        <li>Include at least one uppercase letter</li>
        <li>Include at least one number</li>
      </ul>
    ),
  },
};
