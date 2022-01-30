import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const FillSmall = Template.bind({});
FillSmall.args = {
  size: 'small',
  appearance: 'fill',
  colorScheme: 'blue',
  children: 'Submit',
};

export const FillMedium = Template.bind({});
FillMedium.args = {
  size: 'medium',
  appearance: 'fill',
  colorScheme: 'white',
  children: 'Submit',
};

export const FillLarge = Template.bind({});
FillLarge.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'red',
  children: 'Cancel',
};

export const FillWhite = Template.bind({});
FillWhite.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'white',
  children: 'Submit',
};

export const FillWhiteDisabled = Template.bind({});
FillWhiteDisabled.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'white',
  disabled: true,
  children: 'Submit',
};

export const FillBlack = Template.bind({});
FillBlack.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'black',
  children: 'Submit',
};

export const FillBlackDisabled = Template.bind({});
FillBlackDisabled.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'black',
  disabled: true,
  children: 'Submit',
};

export const FillBlue = Template.bind({});
FillBlue.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'blue',
  children: 'Submit',
};

export const FillBlueDisabled = Template.bind({});
FillBlueDisabled.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'blue',
  disabled: true,
  children: 'Submit',
};

export const FillRed = Template.bind({});
FillRed.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'red',
  children: 'Cancel',
};

export const FillRedDisabled = Template.bind({});
FillRedDisabled.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'red',
  disabled: true,
  children: 'Cancel',
};

export const FillGreen = Template.bind({});
FillGreen.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'green',
  children: 'Cancel',
};

export const FillGreenDisabled = Template.bind({});
FillGreenDisabled.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'green',
  disabled: true,
  children: 'Cancel',
};

export const OutlineSmall = Template.bind({});
OutlineSmall.args = {
  size: 'small',
  appearance: 'outline',
  colorScheme: 'green',
  children: 'Submit',
};

export const OutlineMedium = Template.bind({});
OutlineMedium.args = {
  size: 'medium',
  appearance: 'outline',
  colorScheme: 'black',
  children: 'Submit',
};

export const OutlineLarge = Template.bind({});
OutlineLarge.args = {
  size: 'large',
  appearance: 'outline',
  colorScheme: 'blue',
  children: 'Cancel',
};

export const OutlineWhite = Template.bind({});
OutlineWhite.args = {
  size: 'large',
  appearance: 'outline',
  colorScheme: 'white',
  children: 'Submit',
};

export const OutlineWhiteDisabled = Template.bind({});
OutlineWhiteDisabled.args = {
  size: 'large',
  appearance: 'outline',
  colorScheme: 'white',
  disabled: true,
  children: 'Submit',
};

export const OutlineBlack = Template.bind({});
OutlineBlack.args = {
  size: 'large',
  appearance: 'outline',
  colorScheme: 'black',
  children: 'Submit',
};

export const OutlineBlackDisabled = Template.bind({});
OutlineBlackDisabled.args = {
  size: 'large',
  appearance: 'outline',
  colorScheme: 'black',
  disabled: true,
  children: 'Submit',
};

export const OutlineBlue = Template.bind({});
OutlineBlue.args = {
  size: 'large',
  appearance: 'outline',
  colorScheme: 'blue',
  children: 'Submit',
};

export const OutlineBlueDisabled = Template.bind({});
OutlineBlueDisabled.args = {
  size: 'large',
  appearance: 'outline',
  colorScheme: 'blue',
  disabled: true,
  children: 'Submit',
};

export const OutlineRed = Template.bind({});
OutlineRed.args = {
  size: 'large',
  appearance: 'outline',
  colorScheme: 'red',
  children: 'Cancel',
};

export const OutlineRedDisabled = Template.bind({});
OutlineRedDisabled.args = {
  size: 'large',
  appearance: 'outline',
  colorScheme: 'red',
  disabled: true,
  children: 'Cancel',
};

export const OutlineGreen = Template.bind({});
OutlineGreen.args = {
  size: 'large',
  appearance: 'outline',
  colorScheme: 'green',
  children: 'Cancel',
};

export const OutlineGreenDisabled = Template.bind({});
OutlineGreenDisabled.args = {
  size: 'large',
  appearance: 'outline',
  colorScheme: 'green',
  disabled: true,
  children: 'Cancel',
};

export const TextSmall = Template.bind({});
TextSmall.args = {
  size: 'small',
  appearance: 'text',
  colorScheme: 'green',
  children: 'Submit',
};

export const TextMedium = Template.bind({});
TextMedium.args = {
  size: 'medium',
  appearance: 'text',
  colorScheme: 'black',
  children: 'Submit',
};

export const TextLarge = Template.bind({});
TextLarge.args = {
  size: 'large',
  appearance: 'text',
  colorScheme: 'blue',
  children: 'Cancel',
};

export const TextWhite = Template.bind({});
TextWhite.args = {
  size: 'large',
  appearance: 'text',
  colorScheme: 'white',
  children: 'Submit',
};

export const TextWhiteDisabled = Template.bind({});
TextWhiteDisabled.args = {
  size: 'large',
  appearance: 'text',
  colorScheme: 'white',
  disabled: true,
  children: 'Submit',
};

export const TextBlack = Template.bind({});
TextBlack.args = {
  size: 'large',
  appearance: 'text',
  colorScheme: 'black',
  children: 'Submit',
};

export const TextBlackDisabled = Template.bind({});
TextBlackDisabled.args = {
  size: 'large',
  appearance: 'text',
  colorScheme: 'black',
  disabled: true,
  children: 'Submit',
};

export const TextBlue = Template.bind({});
TextBlue.args = {
  size: 'large',
  appearance: 'text',
  colorScheme: 'blue',
  children: 'Submit',
};

export const TextBlueDisabled = Template.bind({});
TextBlueDisabled.args = {
  size: 'large',
  appearance: 'text',
  colorScheme: 'blue',
  disabled: true,
  children: 'Submit',
};

export const TextRed = Template.bind({});
TextRed.args = {
  size: 'large',
  appearance: 'text',
  colorScheme: 'red',
  children: 'Cancel',
};

export const TextRedDisabled = Template.bind({});
TextRedDisabled.args = {
  size: 'large',
  appearance: 'text',
  colorScheme: 'red',
  disabled: true,
  children: 'Cancel',
};

export const TextGreen = Template.bind({});
TextGreen.args = {
  size: 'large',
  appearance: 'text',
  colorScheme: 'green',
  children: 'Cancel',
};

export const TextGreenDisabled = Template.bind({});
TextGreenDisabled.args = {
  size: 'large',
  appearance: 'text',
  colorScheme: 'green',
  disabled: true,
  children: 'Cancel',
};
