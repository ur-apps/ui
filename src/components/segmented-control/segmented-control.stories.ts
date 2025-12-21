import type { Meta, StoryObj } from '@storybook/react-vite';

import { ReactComponent as TextAlignLeftCenterIcon } from 'icons/text.align.center.svg';
import { ReactComponent as TextAlignLeftIcon } from 'icons/text.align.left.svg';
import { ReactComponent as TextAlignLeftRightIcon } from 'icons/text.align.right.svg';
import { ReactComponent as TextJustifyStretchIcon } from 'icons/text.justify.stretch.svg';

import { SegmentedControl } from './segmented-control';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Form/SegmentedControl',
  component: SegmentedControl,
  argTypes: {
    color: {
      control: 'radio',
    },
    multiple: {
      control: 'boolean',
    },
  },
};

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

export const WithIcon: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    shape: 'default',
    size: 'm',
    multiple: false,
    name: 'align',
    disabled: false,
    options: [
      {
        icon: TextAlignLeftIcon,
        value: 'left',
      },
      {
        icon: TextAlignLeftRightIcon,
        value: 'right',
      },
      {
        icon: TextAlignLeftCenterIcon,
        value: 'center',
      },
      {
        icon: TextJustifyStretchIcon,
        value: 'stretch',
      },
    ],
  },
};
