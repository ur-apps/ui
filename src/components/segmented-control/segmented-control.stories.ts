import type { Meta, StoryObj } from '@storybook/react';

import { SegmentedControl } from './segmented-control';

const meta = {
  title: 'Form/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithText: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    shape: 'default',
    size: 'm',
    multiple: false,
    disabled: false,
    options: [
      {
        label: 'Mobile',
        value: 'mobile',
      },
      {
        label: 'Tablet',
        value: 'tablet',
      },
      {
        label: 'Desktop',
        value: 'desktop',
      },
    ],
  },
};
