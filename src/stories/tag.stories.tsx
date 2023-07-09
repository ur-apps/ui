import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag, ITagProps, PlayButton } from '../components';
import { CloseIcon, PencilIcon } from '../icons';

export default {
  title: 'Components/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'verb',
} as ITagProps;

export const Accent = Template.bind({});
Accent.args = {
  color: 'accent',
  children: 'əˈraɪz',
} as ITagProps;

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: 'outline',
  color: 'secondary',
  children: 'verb',
} as ITagProps;

export const Success = Template.bind({});
Success.args = {
  appearance: 'outline',
  color: 'success',
  children: 'əˈraɪz',
} as ITagProps;

export const Warning = Template.bind({});
Warning.args = {
  appearance: 'outline',
  color: 'warning',
  children: 'əˈraɪz',
} as ITagProps;

export const Error = Template.bind({});
Error.args = {
  appearance: 'outline',
  color: 'error',
  children: 'əˈraɪz',
} as ITagProps;

export const WithButtons = Template.bind({});
WithButtons.args = {
  appearance: 'outline',
  color: 'primary',
  children: 'lorem',
  buttons: [
    {
      id: 'b1',
      icon: CloseIcon,
      onClick: console.log,
    },
    {
      id: 'b2',
      icon: PencilIcon,
    },
    {
      id: 'b3',
      label: 'text',
      position: 'start',
    },
    {
      id: 'b4',
      icon: PencilIcon,
      onClick: console.log,
      position: 'start',
    },
    {
      id: 'b5',
      label: 'text',
      onClick: console.log,
    },
    {
      id: 'b6',
      icon: CloseIcon,
      onClick: console.log,
      position: 'start',
    },
    {
      id: 'b7',
      icon: PlayButton,
      onClick: console.log,
      position: 'start',
    },
  ],
} as ITagProps;
