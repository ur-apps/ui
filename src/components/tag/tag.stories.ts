import type { Meta, StoryObj } from '@storybook/react';

import { ReactComponent as InfoFilledIcon } from 'icons/info.circle.filled.svg';
import { ReactComponent as PencilIcon } from 'icons/pencil.svg';
import { ReactComponent as TrashFilledIcon } from 'icons/trash.filled.svg';
import { ReactComponent as TrashOutlinedIcon } from 'icons/trash.outlined.svg';

import { Tag } from './tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    shape: 'default',
    children: 'nature',
  },
};

export const FilledWithButtons: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    shape: 'default',
    children: 'nature',
    buttons: [
      {
        icon: InfoFilledIcon,
        position: 'before',
      },
      {
        icon: PencilIcon,
        title: 'edit',
        position: 'after',
        onClick: console.info,
      },
      {
        icon: TrashFilledIcon,
        title: 'delete',
        position: 'after',
        onClick: console.info,
      },
    ],
  },
};

export const OutlinedWithButtons: Story = {
  args: {
    variant: 'outlined',
    color: 'secondary',
    shape: 'default',
    children: 'nature',
    buttons: [
      {
        icon: TrashOutlinedIcon,
        position: 'after',
        onClick: console.info,
      },
    ],
  },
};
