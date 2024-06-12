import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Text } from 'components/text';

import { Heading } from './heading';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    color: 'primary',
    tag: 'h1',
    size: undefined,
    children: (
      <>
        Lorem, ipsum dolor sit amet consectetur freedom.
        <Text style={{ marginTop: '12px' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio necessitatibus optio nostrum doloremque
          laboriosam voluptatibus repellendus tempore impedit. Deleniti, dolore est illum vel itaque iure recusandae rem
          quos architecto consequuntur.
        </Text>
      </>
    ),
  },
};

export default meta;
