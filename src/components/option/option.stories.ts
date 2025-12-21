import type { Meta, StoryObj } from '@storybook/react-vite';

import { Option } from './option';

const meta: Meta<typeof Option> = {
  title: 'Base/Option',
  component: Option,
  args: {
    variant: 'filled',
    shape: 'default',
    size: 'm',
    type: 'radio',
    label: 'Option',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'language',
    value: 'eng',
    label: 'English',
  },
};
