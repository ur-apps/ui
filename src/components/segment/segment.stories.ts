import type { Meta, StoryObj } from '@storybook/react';

import { Segment } from './segment';

const meta = {
  title: 'Base/Segment',
  component: Segment,
  tags: ['autodocs'],
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
