import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Paper, IPaperProps } from '../components';

export default {
  title: 'Components/Paper',
  component: Paper,
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'xs',
  children: 'Some text',
} as IPaperProps;

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  color: 'darkgray',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto perferendis temporibus hic? Nisi saepe aperiam voluptate facere, sed molestias quidem quod ab, veritatis fugit dignissimos officiis mollitia odio possimus alias.',
} as IPaperProps;
