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
  size: 'small',
  colorScheme: 'blue',
} as IToggleProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  colorScheme: 'blue',
} as IToggleProps;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  colorScheme: 'blue',
} as IToggleProps;

export const SmallWithIcon = Template.bind({});
SmallWithIcon.args = {
  size: 'small',
  colorScheme: 'blue',
  leftIcon: SunIcon,
  rightIcon: MoonIcon,
} as IToggleProps;

export const MediumWithIcon = Template.bind({});
MediumWithIcon.args = {
  size: 'medium',
  colorScheme: 'blue',
  leftIcon: SunIcon,
  rightIcon: MoonIcon,
} as IToggleProps;

export const LargeWithIcon = Template.bind({});
LargeWithIcon.args = {
  size: 'large',
  colorScheme: 'blue',
  leftIcon: SunIcon,
  rightIcon: MoonIcon,
} as IToggleProps;

export const SmallWithText = Template.bind({});
SmallWithText.args = {
  size: 'small',
  colorScheme: 'blue',
  leftText: 'EN',
  rightText: 'RU',
} as IToggleProps;

export const MediumWithText = Template.bind({});
MediumWithText.args = {
  size: 'medium',
  colorScheme: 'blue',
  leftText: 'EN',
  rightText: 'RU',
} as IToggleProps;

export const LargeWithText = Template.bind({});
LargeWithText.args = {
  size: 'large',
  colorScheme: 'blue',
  leftText: 'EN',
  rightText: 'RU',
} as IToggleProps;

export const LightWithIcon = Template.bind({});
LightWithIcon.args = {
  size: 'large',
  colorScheme: 'light',
  leftIcon: SunIcon,
  rightIcon: MoonIcon,
  autoColor: false,
} as IToggleProps;

export const DarkWithIcon = Template.bind({});
DarkWithIcon.args = {
  size: 'large',
  colorScheme: 'dark',
  leftIcon: SunIcon,
  rightIcon: MoonIcon,
  autoColor: false,
} as IToggleProps;

export const LightWithText = Template.bind({});
LightWithText.args = {
  size: 'large',
  colorScheme: 'light',
  leftText: 'EN',
  rightText: 'RU',
  autoColor: false,
} as IToggleProps;

export const DarkWithText = Template.bind({});
DarkWithText.args = {
  size: 'large',
  colorScheme: 'dark',
  leftText: 'EN',
  rightText: 'RU',
  autoColor: false,
} as IToggleProps;
