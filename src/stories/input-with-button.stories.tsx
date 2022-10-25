import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InputWithButton, IInputWithButtonProps } from '../components';

export default {
  title: 'Components/InputWithButton',
  component: InputWithButton,
} as ComponentMeta<typeof InputWithButton>;

const Template: ComponentStory<typeof InputWithButton> = (args) => <InputWithButton {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 's',
  children: 'Submit',
} as IInputWithButtonProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'm',
  children: 'Submit',
} as IInputWithButtonProps;

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  children: 'Submit',
} as IInputWithButtonProps;
