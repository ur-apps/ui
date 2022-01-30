import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal, Input, Button, IModalProps } from '../components';

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>
    <p>
      Nemo soluta modi maiores, iusto itaque placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
      est maxime esse velit.
    </p>
    <Input placeholder="username" />
    <Input type="password" placeholder="password" />
    <Button>Submit</Button>
  </Modal>
);

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

export const Light = Template.bind({});
Light.args = {
  size: 'large',
  colorScheme: 'white',
} as IModalProps;

export const Dark = Template.bind({});
Dark.args = {
  size: 'large',
  colorScheme: 'black',
} as IModalProps;
