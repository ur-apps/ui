import type { Meta, StoryObj } from '@storybook/react';

import { Hint } from './hint';

const meta: Meta<typeof Hint> = {
  title: 'Base/Hint',
  component: Hint,
  args: {
    icon: 'info',
    variant: 'filled',
    color: 'auto',
    size: 'm',
    children: '',
    className: '',
  },
  argTypes: {
    icon: {
      control: 'inline-radio',
      options: ['info', 'question', 'success', 'warning', 'danger'],
    },
    variant: {
      control: 'inline-radio',
      options: ['filled', 'outlined'],
    },
    color: {
      control: 'inline-radio',
      options: ['auto', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'inline-radio',
      options: ['xs', 's', 'm', 'l'],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Icons: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Hint {...args} icon="info" />
      <Hint {...args} icon="question" />
      <Hint {...args} icon="success" />
      <Hint {...args} icon="warning" />
      <Hint {...args} icon="danger" />
    </div>
  ),
};

export const Variants: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Hint {...args} icon="info" variant="filled">
          filled
        </Hint>
        <Hint {...args} icon="question" variant="filled">
          filled
        </Hint>
        <Hint {...args} icon="success" variant="filled">
          filled
        </Hint>
        <Hint {...args} icon="warning" variant="filled">
          filled
        </Hint>
        <Hint {...args} icon="danger" variant="filled">
          filled
        </Hint>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Hint {...args} icon="info" variant="outlined">
          outlined
        </Hint>
        <Hint {...args} icon="question" variant="outlined">
          outlined
        </Hint>
        <Hint {...args} icon="success" variant="outlined">
          outlined
        </Hint>
        <Hint {...args} icon="warning" variant="outlined">
          outlined
        </Hint>
        <Hint {...args} icon="danger" variant="outlined">
          outlined
        </Hint>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Hint {...args} icon="info" variant="filled" color="primary">
        primary
      </Hint>
      <Hint {...args} icon="question" variant="filled" color="secondary">
        secondary
      </Hint>
      <Hint {...args} icon="success" variant="filled" color="success">
        success
      </Hint>
      <Hint {...args} icon="warning" variant="filled" color="warning">
        warning
      </Hint>
      <Hint {...args} icon="danger" variant="filled" color="danger">
        danger
      </Hint>
    </div>
  ),
};
