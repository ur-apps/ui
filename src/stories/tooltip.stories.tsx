import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text, Tooltip, ITooltipProps, Button } from '../components';
import { InfoIcon } from '../icons';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 's',
  position: 'bottom',
  color: 'dark',
  autoColor: false,
  children: <InfoIcon />,
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores odit quaerat labore ipsam, ex facere soluta provident molestiae impedit. Iure ducimus, enim perferendis reiciendis nobis eos blanditiis voluptatem sit?',
} as ITooltipProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'm',
  position: 'right',
  children: <Button>Submit</Button>,
  text: [
    'Incorrect password format',
    'Password must contain at least 6 characters',
    'Password must contain at least 1 capital letter',
  ],
} as ITooltipProps;

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  position: 'bottom',
  color: 'dark',
  autoColor: false,
  children: <Text>Lorem ipsum dolor sit amet</Text>,
  text: [
    'Incorrect password format',
    'Password must contain at least 6 characters',
    'Password must contain at least 1 capital letter',
  ],
} as ITooltipProps;
