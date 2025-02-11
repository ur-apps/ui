import type { Meta, StoryObj } from '@storybook/react';

import { FAKE_COUNTRY_LIST } from 'data/fake';

import { Text } from '../text';

import { Dropdown } from './dropdown';

const style: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '200px',
  transform: 'translate(-50%, -50%)',
};

const meta: Meta<typeof Dropdown> = {
  title: 'Base/Dropdown',
  component: Dropdown,
  args: {
    isOpen: false,
    variant: 'filled',
    shape: 'default',
    size: 'm',
    multiple: false,
    options: FAKE_COUNTRY_LIST,
    style,
  },
  argTypes: {
    multiple: {
      type: 'boolean',
    },
  },
  decorators: [
    (Story) => {
      return (
        <>
          <Story />
          <Text>Open dropdown using the toggle in the control panel 😉</Text>
        </>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    size: 'l',
    multiple: true,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    shape: 'round',
    size: 's',
  },
};

export const Clear: Story = {
  args: {
    variant: 'clear',
    shape: 'brick',
  },
};
