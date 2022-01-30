import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Sandwich, ISandwichProps } from '../components';

export default {
  title: 'Components/Sandwich',
  component: Sandwich,
} as ComponentMeta<typeof Sandwich>;

const Template: ComponentStory<typeof Sandwich> = (args) => <Sandwich {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  colorScheme: 'blue',
} as ISandwichProps;

export const White = Template.bind({});
White.args = {
  colorScheme: 'white',
} as ISandwichProps;

export const Black = Template.bind({});
Black.args = {
  colorScheme: 'black',
} as ISandwichProps;
