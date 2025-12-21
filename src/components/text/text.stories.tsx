import type { Meta, StoryObj } from '@storybook/react-vite';

import { Text } from './text';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    tag: {
      control: 'radio',
      options: ['p', 'span'],
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Paragraph: Story = {
  args: {
    tag: 'p',
    color: 'primary',
    size: 'l',
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio asperiores iusto repellendus et at, nulla maiores amet voluptas nemo fugiat sapiente a delectus suscipit nobis illo nesciunt magni? Facere.',
  },
};

export const Span: Story = {
  args: {
    tag: 'span',
    color: 'secondary',
    size: 'xs',
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio asperiores iusto repellendus et at, nulla maiores amet voluptas nemo fugiat sapiente a delectus suscipit nobis illo nesciunt magni? Facere.',
  },
};

export default meta;
