import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select, ISelectProps, ISelectOption } from '../components';
import { BookIcon, BulbIcon, InfoIcon } from '../icons';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    value: { control: 'text' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const options: ISelectOption[] = [
  {
    value: 'value1',
    label: 'Value 1',
  },
  {
    value: 'value2',
    label: 'Value 2',
  },
  {
    value: 'value3',
    label: 'Value 3',
  },
  {
    value: 'value4',
    label: 'Value 4',
  },
  {
    value: 'value5',
    label: 'Value 5',
  },
  {
    value: 'value6',
    label: 'Value 6',
  },
  {
    value: 'value7',
    label: 'Value 7',
  },
  {
    value: 'value8',
    label: 'Value 8',
  },
  {
    value: 'value9',
    label: 'Value 9',
  },
];

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  placeholder: 'choose a value',
  options,
} as ISelectProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  placeholder: 'choose a value',
  options,
} as ISelectProps;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  placeholder: 'choose a value',
  options,
} as ISelectProps;

export const Light = Template.bind({});
Light.args = {
  size: 'large',
  colorScheme: 'light',
  placeholder: 'choose a value',
  options,
} as ISelectProps;

export const LightDisabled = Template.bind({});
LightDisabled.args = {
  size: 'large',
  colorScheme: 'light',
  placeholder: 'choose a value',
  disabled: true,
  options,
} as ISelectProps;

export const Dark = Template.bind({});
Dark.args = {
  size: 'large',
  colorScheme: 'dark',
  placeholder: 'choose a value',
  options,
} as ISelectProps;

export const DarkDisabled = Template.bind({});
DarkDisabled.args = {
  size: 'large',
  colorScheme: 'dark',
  placeholder: 'choose a value',
  disabled: true,
  options,
} as ISelectProps;

export const WithIconSmall = Template.bind({});
WithIconSmall.args = {
  size: 'small',
  placeholder: 'choose a value',
  icon: InfoIcon,
  options,
} as ISelectProps;

export const WithIconMedium = Template.bind({});
WithIconMedium.args = {
  size: 'medium',
  placeholder: 'choose a value',
  icon: BulbIcon,
  options,
  controlled: true,
  onChange: (evt) => {
    console.log(evt.target.value);
  },
} as ISelectProps;

export const WithIconLarge = Template.bind({});
WithIconLarge.args = {
  size: 'large',
  placeholder: 'choose dictionary',
  icon: BookIcon,
  options,
} as ISelectProps;
