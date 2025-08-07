import type { Meta, StoryObj } from '@storybook/react';

import { StatusIcon } from './status-icon';

const meta: Meta<typeof StatusIcon> = {
  title: 'Base/StatusIcon',
  component: StatusIcon,
  args: {
    status: 'info',
    variant: 'filled',
    size: 'm',
    className: '',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    status: 'info',
    size: 'l',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    size: 's',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    size: 'l',
  },
};
