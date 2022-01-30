import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconsPreview } from '../icons';

export default {
  title: 'Components/Icons',
  component: IconsPreview,
} as ComponentMeta<typeof IconsPreview>;

const Template: ComponentStory<typeof IconsPreview> = () => <IconsPreview />;

export const AllIcons = Template.bind({});
