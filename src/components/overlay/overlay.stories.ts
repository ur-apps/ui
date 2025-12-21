import type { Meta, StoryObj } from '@storybook/react-vite';

import { Overlay } from './overlay';

const meta: Meta<typeof Overlay> = {
  title: 'Base/Overlay',
  component: Overlay,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
