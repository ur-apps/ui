import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar, IAvatarProps } from '../components';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  colorScheme: 'light',
} as IAvatarProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  colorScheme: 'light',
} as IAvatarProps;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  colorScheme: 'light',
} as IAvatarProps;

export const Blue = Template.bind({});
Blue.args = {
  size: 'large',
  colorScheme: 'blue',
} as IAvatarProps;

export const Light = Template.bind({});
Light.args = {
  size: 'large',
  colorScheme: 'light',
} as IAvatarProps;

export const Dark = Template.bind({});
Dark.args = {
  size: 'large',
  colorScheme: 'dark',
} as IAvatarProps;

export const WithImg = Template.bind({});
WithImg.args = {
  size: 'large',
  colorScheme: 'light',
  img: 'https://cdn.dribbble.com/users/2314387/screenshots/11401644/aang-high-resolution_4x.png',
} as IAvatarProps;
