import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Hr, IHrProps } from '../components';

export default {
  title: 'Components/Hr',
  component: Hr,
} as ComponentMeta<typeof Hr>;

const Template: ComponentStory<typeof Hr> = (args) => <Hr {...args} />;

export const Light = Template.bind({});
Light.args = {
  colorScheme: 'light',
  autoColor: false,
} as IHrProps;

export const Dark = Template.bind({});
Dark.args = {
  colorScheme: 'dark',
  autoColor: false,
} as IHrProps;
