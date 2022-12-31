import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Feature, IFeatureProps } from '../components';

export default {
  title: 'Components/Feature',
  component: Feature,
} as ComponentMeta<typeof Feature>;

const Template: ComponentStory<typeof Feature> = (args) => <Feature {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  size: 's',
  colorScheme: 'blue',
  category: 'non finiteness',
  children: 'intransitive',
} as IFeatureProps;

export const Pink = Template.bind({});
Pink.args = {
  size: 's',
  colorScheme: 'pink',
  category: 'non finiteness',
  children: 'intransitive',
} as IFeatureProps;
