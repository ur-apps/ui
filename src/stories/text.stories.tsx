import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text, ITextProps } from '../components';

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

const demoText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: 'xs',
  children: demoText,
} as ITextProps;

export const Small = Template.bind({});
Small.args = {
  size: 's',
  children: demoText,
} as ITextProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'm',
  children: demoText,
} as ITextProps;

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  children: demoText,
} as ITextProps;

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xl',
  children: demoText,
} as ITextProps;
