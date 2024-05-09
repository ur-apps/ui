import type { Meta, StoryObj } from '@storybook/react';

import { Overlay } from './overlay';

const meta = {
  title: 'Base/Overlay',
  component: Overlay,
  tags: ['autodocs'],
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
