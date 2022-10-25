import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Toggle, IToggleProps } from '../components';
import { SunIcon, MoonIcon } from '../icons';

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 's',
  colorScheme: 'blue',
} as IToggleProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'm',
  colorScheme: 'blue',
} as IToggleProps;

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  colorScheme: 'blue',
} as IToggleProps;

export const SmallWithIcon = Template.bind({});
SmallWithIcon.args = {
  size: 's',
  colorScheme: 'blue',
  leftIcon: SunIcon,
  rightIcon: MoonIcon,
} as IToggleProps;

export const MediumWithIcon = Template.bind({});
MediumWithIcon.args = {
  size: 'm',
  colorScheme: 'blue',
  leftIcon: SunIcon,
  rightIcon: MoonIcon,
} as IToggleProps;

export const LargeWithIcon = Template.bind({});
LargeWithIcon.args = {
  size: 'l',
  colorScheme: 'blue',
  leftIcon: SunIcon,
  rightIcon: MoonIcon,
} as IToggleProps;

export const SmallWithText = Template.bind({});
SmallWithText.args = {
  size: 's',
  colorScheme: 'blue',
  leftText: 'EN',
  rightText: 'RU',
} as IToggleProps;

export const MediumWithText = Template.bind({});
MediumWithText.args = {
  size: 'm',
  colorScheme: 'blue',
  leftText: 'EN',
  rightText: 'RU',
} as IToggleProps;

export const LargeWithText = Template.bind({});
LargeWithText.args = {
  size: 'l',
  colorScheme: 'blue',
  leftText: 'EN',
  rightText: 'RU',
} as IToggleProps;

export const LightWithIcon = Template.bind({});
LightWithIcon.args = {
  size: 'l',
  colorScheme: 'light',
  leftIcon: SunIcon,
  rightIcon: MoonIcon,
  autoColor: false,
} as IToggleProps;

export const DarkWithIcon = Template.bind({});
DarkWithIcon.args = {
  size: 'l',
  colorScheme: 'dark',
  leftIcon: SunIcon,
  rightIcon: MoonIcon,
  autoColor: false,
} as IToggleProps;

export const LightWithText = Template.bind({});
LightWithText.args = {
  size: 'l',
  colorScheme: 'light',
  leftText: 'EN',
  rightText: 'RU',
  autoColor: false,
} as IToggleProps;

export const DarkWithText = Template.bind({});
DarkWithText.args = {
  size: 'l',
  colorScheme: 'dark',
  leftText: 'EN',
  rightText: 'RU',
  autoColor: false,
} as IToggleProps;
