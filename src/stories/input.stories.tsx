import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input, IInputProps } from '../components';
import { MaginfierIcon, InfoIcon, PencilIcon } from '../icons';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    value: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    minLength: { control: 'number' },
    maxLength: { control: 'number' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 's',
  colorScheme: 'light',
  placeholder: 'Placeholder',
} as IInputProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'm',
  colorScheme: 'light',
  placeholder: 'Placeholder',
} as IInputProps;

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  colorScheme: 'light',
  placeholder: 'Placeholder',
} as IInputProps;

export const Light = Template.bind({});
Light.args = {
  size: 'l',
  colorScheme: 'light',
  autoColor: true,
  placeholder: 'Placeholder',
} as IInputProps;

export const LightDisabled = Template.bind({});
LightDisabled.args = {
  size: 'l',
  colorScheme: 'light',
  autoColor: true,
  placeholder: 'Placeholder',
  disabled: true,
} as IInputProps;

export const Dark = Template.bind({});
Dark.args = {
  size: 'l',
  colorScheme: 'dark',
  autoColor: true,
  placeholder: 'Placeholder',
} as IInputProps;

export const DarkDisabled = Template.bind({});
DarkDisabled.args = {
  size: 'l',
  colorScheme: 'dark',
  autoColor: true,
  placeholder: 'Placeholder',
  disabled: true,
} as IInputProps;

export const WithIconSmall = Template.bind({});
WithIconSmall.args = {
  size: 's',
  colorScheme: 'light',
  autoColor: false,
  icon: PencilIcon,
  placeholder: 'Placeholder',
} as IInputProps;

export const WithIconMedium = Template.bind({});
WithIconMedium.args = {
  size: 'm',
  colorScheme: 'light',
  autoColor: false,
  icon: InfoIcon,
  placeholder: 'Placeholder',
} as IInputProps;

export const WithIconLarge = Template.bind({});
WithIconLarge.args = {
  size: 'l',
  colorScheme: 'light',
  autoColor: false,
  icon: MaginfierIcon,
  placeholder: 'Placeholder',
} as IInputProps;

export const WithInfo = Template.bind({});
WithInfo.args = {
  size: 'm',
  colorScheme: 'light',
  autoColor: false,
  placeholder: 'Placeholder',
  info: 'username must contain latin letters, numbers and symbols: ._-',
} as IInputProps;

export const WithError = Template.bind({});
WithError.args = {
  size: 'm',
  colorScheme: 'light',
  autoColor: false,
  placeholder: 'Placeholder',
  info: 'username must contain latin letters, numbers and symbols: ._-',
  error: [
    'Incorrect password format',
    'Password must contain at least 6 characters',
    'Password must contain at least 1 capital letter',
  ],
} as IInputProps;
