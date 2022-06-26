import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PlayButton, IPlayButtonProps } from '../components';

export default {
  title: 'Components/PlayButton',
  component: PlayButton,
} as ComponentMeta<typeof PlayButton>;

const Template: ComponentStory<typeof PlayButton> = (args) => <PlayButton {...args} />;

export const Play = Template.bind({});
Play.args = {
  size: 'l',
  variant: 'play',
  audioURL: 'https://audio12.forvo.com/audios/mp3/h/s/hs_9004571_39_320263_732447.mp3',
} as IPlayButtonProps;

export const Volume = Template.bind({});
Volume.args = {
  size: 'l',
  variant: 'volume',
  audioURL: 'https://audio12.forvo.com/audios/mp3/h/s/hs_9004571_39_320263_732447.mp3',
} as IPlayButtonProps;
