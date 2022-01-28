import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeToggle } from '../components';

export default {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
} as ComponentMeta<typeof ThemeToggle>;

const Template: ComponentStory<typeof ThemeToggle> = (args) => <ThemeToggle {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
