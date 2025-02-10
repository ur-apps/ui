import type { Meta, StoryObj } from '@storybook/react';

import { Option } from './option';

const meta = {
  title: 'Base/Option',
  component: Option,
} satisfies Meta<typeof Option>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'language',
    value: 'eng',
    label: 'English',
  },
};
