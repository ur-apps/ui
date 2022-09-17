import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Transcription, ITranscriptionProps } from '../components';

export default {
  title: 'Components/Transcription',
  component: Transcription,
} as ComponentMeta<typeof Transcription>;

const Template: ComponentStory<typeof Transcription> = (args) => <Transcription {...args} />;

const fakeData = {
  id: 'testid1',
  transcription: 'əˈraɪz',
  audio: 'https://audio12.forvo.com/audios/mp3/h/s/hs_9004571_39_320263_732447.mp3',
  isActive: true,
  editable: true,
  removable: true,
};

export const ReadMode = Template.bind({});
ReadMode.args = {
  ...fakeData,

  mode: 'read',
} as ITranscriptionProps;

export const EditMode = Template.bind({});
EditMode.args = {
  ...fakeData,
  mode: 'edit',
} as ITranscriptionProps;
