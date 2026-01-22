import type { Meta, StoryObj } from '@storybook/react-vite';

import { ReactComponent as CheckmarkFilledIcon } from 'icons/checkmark.circle.filled.svg';
import { ReactComponent as ExclamationTriangleIconFilled } from 'icons/exclamationmark.triangle.filled.svg';
import { ReactComponent as InfoFilledIcon } from 'icons/info.circle.filled.svg';
import { ReactComponent as PencilIcon } from 'icons/pencil.svg';
import { ReactComponent as TrashFilledIcon } from 'icons/trash.filled.svg';
import { ReactComponent as TrashOutlinedIcon } from 'icons/trash.outlined.svg';

import { Tag } from './tag';
import { ITagButtonProps } from './tag.types';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    variant: {
      control: 'inline-radio',
    },
    color: {
      control: 'inline-radio',
    },
    shape: {
      control: 'inline-radio',
    },
    size: {
      control: 'inline-radio',
    },
  },
  args: {
    variant: 'filled',
    color: 'primary',
    shape: 'default',
    size: 'm',
  },
};

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

export const WithDiffrentButtonColors: Story = {
  render: (args) => {
    const buttons: ITagButtonProps[] = [
      { icon: InfoFilledIcon, position: 'before', color: 'inherit', title: 'inherit' },
      { icon: InfoFilledIcon, position: 'before', color: 'primary', title: 'primary' },
      { icon: InfoFilledIcon, position: 'before', color: 'secondary', title: 'secondary' },
      { icon: InfoFilledIcon, position: 'before', color: 'accent', title: 'accent' },
      { icon: CheckmarkFilledIcon, position: 'after', color: 'success', title: 'success' },
      { icon: ExclamationTriangleIconFilled, position: 'after', color: 'warning', title: 'warning' },
      { icon: TrashFilledIcon, position: 'after', color: 'danger', title: 'danger' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Tag {...args} variant="filled" buttons={buttons}>
          filled
        </Tag>

        <Tag {...args} variant="outlined" buttons={buttons}>
          outlined
        </Tag>

        <Tag {...args} variant="ghost" buttons={buttons}>
          ghost
        </Tag>
      </div>
    );
  },
};
