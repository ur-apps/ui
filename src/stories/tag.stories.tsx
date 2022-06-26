import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag, ITagProps } from '../components';

export default {
  title: 'Components/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const FillBlue = Template.bind({});
FillBlue.args = {
  colorScheme: 'blue',
  children: 'verb',
} as ITagProps;

export const FillPink = Template.bind({});
FillPink.args = {
  colorScheme: 'pink',
  children: 'əˈraɪz',
} as ITagProps;

export const OutlineBlue = Template.bind({});
OutlineBlue.args = {
  appearance: 'outline',
  colorScheme: 'blue',
  children: 'verb',
} as ITagProps;

export const OutlinePink = Template.bind({});
OutlinePink.args = {
  appearance: 'outline',
  colorScheme: 'pink',
  children: 'əˈraɪz',
} as ITagProps;
