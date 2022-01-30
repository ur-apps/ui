import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from '../components';

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

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
  colorScheme: 'blue',
  children: 'Submit',
};

export const FillWhite = Template.bind({});
FillWhite.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'white',
  children: 'Submit',
};

export const FillBlack = Template.bind({});
FillBlack.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'black',
  children: 'Submit',
};

export const FillBlue = Template.bind({});
FillBlue.args = {
  size: 'large',
  appearance: 'fill',
  colorScheme: 'blue',
  children: 'Submit',
};

export const OutlineSmall = Template.bind({});
OutlineSmall.args = {
  size: 'small',
  appearance: 'outline',
  colorScheme: 'blue',
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
  children: 'Submit',
};

export const OutlineWhite = Template.bind({});
OutlineWhite.args = {
  size: 'large',
  appearance: 'outline',
  colorScheme: 'white',
  children: 'Submit',
};

export const OutlineBlack = Template.bind({});
OutlineBlack.args = {
  size: 'large',
  appearance: 'outline',
  colorScheme: 'black',
  children: 'Submit',
};

export const OutlineBlue = Template.bind({});
OutlineBlue.args = {
  size: 'large',
  appearance: 'outline',
  colorScheme: 'blue',
  children: 'Submit',
};

export const TextSmall = Template.bind({});
TextSmall.args = {
  size: 'small',
  appearance: 'text',
  colorScheme: 'blue',
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
  children: 'Submit',
};

export const TextWhite = Template.bind({});
TextWhite.args = {
  size: 'large',
  appearance: 'text',
  colorScheme: 'white',
  children: 'Submit',
};

export const TextBlack = Template.bind({});
TextBlack.args = {
  size: 'large',
  appearance: 'text',
  colorScheme: 'black',
  children: 'Submit',
};

export const TextBlue = Template.bind({});
TextBlue.args = {
  size: 'large',
  appearance: 'text',
  colorScheme: 'blue',
  children: 'Submit',
};
