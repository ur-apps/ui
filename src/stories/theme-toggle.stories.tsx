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
  size: 's',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'm',
};

export const Large = Template.bind({});
Large.args = {
  size: 'l',
};
