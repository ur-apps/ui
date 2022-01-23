import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input, IInputProps } from '../components';

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
  size: 'small',
  colorScheme: 'light',
  placeholder: 'Placeholder',
} as IInputProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  colorScheme: 'light',
  placeholder: 'Placeholder',
} as IInputProps;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  colorScheme: 'light',
  placeholder: 'Placeholder',
} as IInputProps;

export const Light = Template.bind({});
Light.args = {
  size: 'large',
  colorScheme: 'light',
  autoColor: true,
  placeholder: 'Placeholder',
} as IInputProps;

export const LightDisabled = Template.bind({});
LightDisabled.args = {
  size: 'large',
  colorScheme: 'light',
  autoColor: true,
  placeholder: 'Placeholder',
  disabled: true,
} as IInputProps;

export const Dark = Template.bind({});
Dark.args = {
  size: 'large',
  colorScheme: 'dark',
  autoColor: true,
  placeholder: 'Placeholder',
} as IInputProps;

export const DarkDisabled = Template.bind({});
DarkDisabled.args = {
  size: 'large',
  colorScheme: 'dark',
  autoColor: true,
  placeholder: 'Placeholder',
  disabled: true,
} as IInputProps;
