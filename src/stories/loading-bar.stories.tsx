import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoadingBar } from '../components';

export default {
  title: 'Components/LoadingBar',
  component: LoadingBar,
} as ComponentMeta<typeof LoadingBar>;

const Template: ComponentStory<typeof LoadingBar> = (args) => <LoadingBar {...args} />;

export const Default = Template.bind({});
