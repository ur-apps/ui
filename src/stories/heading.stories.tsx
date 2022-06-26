import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading, IHeadingProps } from '../components';

export default {
  title: 'Components/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

const demoText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

export const H1 = Template.bind({});
H1.args = {
  size: 'h1',
  children: demoText,
} as IHeadingProps;

export const H2 = Template.bind({});
H2.args = {
  size: 'h2',
  children: demoText,
} as IHeadingProps;

export const H3 = Template.bind({});
H3.args = {
  size: 'h3',
  children: demoText,
} as IHeadingProps;

export const H4 = Template.bind({});
H4.args = {
  size: 'h4',
  children: demoText,
} as IHeadingProps;

export const H5 = Template.bind({});
H5.args = {
  size: 'h5',
  children: demoText,
} as IHeadingProps;

export const H6 = Template.bind({});
H6.args = {
  size: 'h6',
  children: demoText,
} as IHeadingProps;
