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

export const FillSmall = Template.bind({});
FillSmall.args = {
  size: 'small',
  appearance: 'fill',
  colorScheme: 'lightgray',
  placeholder: 'Placeholder',
} as IInputProps;

export const FillMedium = Template.bind({});
FillMedium.args = {
  size: 'medium',
  appearance: 'fill',
  colorScheme: 'lightgray',
  placeholder: 'Placeholder',
} as IInputProps;

export const FillLarge = Template.bind({});
FillLarge.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'lightgray',
  placeholder: 'Placeholder',
} as IInputProps;

export const FillLight = Template.bind({});
FillLight.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'lightgray',
  autoColor: true,
  placeholder: 'Placeholder',
} as IInputProps;

export const FillLightDisabled = Template.bind({});
FillLightDisabled.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'lightgray',
  autoColor: true,
  placeholder: 'Placeholder',
  disabled: true,
} as IInputProps;

export const FillDark = Template.bind({});
FillDark.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'darkgray',
  autoColor: true,
  placeholder: 'Placeholder',
} as IInputProps;

export const FillDarkDisabled = Template.bind({});
FillDarkDisabled.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'darkgray',
  autoColor: true,
  placeholder: 'Placeholder',
  disabled: true,
} as IInputProps;
