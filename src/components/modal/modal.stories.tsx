import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'components/button';
import { Input } from 'components/input';
import { Select } from 'components/select';
import { Text } from 'components/text';
import { FAKE_COUNTRY_LIST } from 'data/fake';

import { Modal } from './modal';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallForm: Story = {
  args: {
    isOpen: true,
    shape: 'default',
    size: 's',
    withOverlay: false,
    closeOnESC: true,
    closeOnOverlay: true,
    onClose: () => console.info('called on close callback'),
    children: <ExampleForm size="s" />,
  },
};

export const SmallInfo: Story = {
  args: {
    isOpen: true,
    shape: 'default',
    size: 's',
    withOverlay: true,
    closeOnESC: true,
    closeOnOverlay: true,
    onClose: () => console.info('called on close callback'),
    children: <ExampleInfo size="s" />,
  },
};

export const MediumForm: Story = {
  args: {
    isOpen: true,
    shape: 'default',
    size: 'm',
    withOverlay: true,
    closeOnESC: true,
    closeOnOverlay: true,
    onClose: () => console.info('called on close callback'),
    children: <ExampleForm size="m" />,
  },
};

export const MediumInfo: Story = {
  args: {
    isOpen: true,
    shape: 'default',
    size: 'm',
    withOverlay: false,
    closeOnESC: true,
    closeOnOverlay: true,
    onClose: () => console.info('called on close callback'),
    children: <ExampleInfo size="m" />,
  },
};

export const LargeForm: Story = {
  args: {
    isOpen: true,
    shape: 'default',
    size: 'l',
    withOverlay: false,
    closeOnESC: true,
    closeOnOverlay: true,
    onClose: () => console.info('called on close callback'),
    children: <ExampleForm size="l" />,
  },
};

export const LargeInfo: Story = {
  args: {
    isOpen: true,
    shape: 'default',
    size: 'l',
    withOverlay: true,
    closeOnESC: true,
    closeOnOverlay: true,
    onClose: () => console.info('called on close callback'),
    children: <ExampleInfo size="l" />,
  },
};

function ExampleForm({ size }: { size?: 's' | 'm' | 'l' }) {
  const [values, setValues] = useState({
    name: 'John Doe',
    birthdate: '1990-05-03',
    birthplace: 'NZ',
    email: 'john.doe',
    password: 'mypassword',
  });

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    console.info(JSON.stringify(values, undefined, 2));
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} onSubmit={onSubmit}>
      <h2 style={{ margin: '0 0 8px 0', textAlign: 'center' }}>Sign up</h2>
      <p style={{ alignSelf: 'center', width: '280px', margin: '0 0 8px 0', textAlign: 'center' }}>
        To sign up you must fill in the information below
      </p>
      <Input size={size} prefix="full name:" name="name" value={values.name} onChange={onChange} />
      <Input
        type="date"
        size={size}
        prefix="birth date:"
        name="birthdate"
        value={values.birthdate}
        onChange={onChange}
      />
      <Select
        size={size}
        prefix="birthplace:"
        name="birthplace"
        options={FAKE_COUNTRY_LIST}
        value={values.birthplace}
        onChange={onChange}
      />
      <Input size={size} prefix="email:" postfix="@gmail.com" name="email" value={values.email} onChange={onChange} />
      <Input
        type="password"
        size={size}
        prefix="password:"
        name="password"
        value={values.password}
        onChange={onChange}
      />
      <Button type="submit" size={size} label="sign up" />
    </form>
  );
}

function ExampleInfo({ size }: { size?: 's' | 'm' | 'l' }) {
  return (
    <>
      <h2 style={{ margin: '0 0 var(--uu-space-s) 0' }}>Lorem ipsum</h2>
      <Text style={{ width: 'fit-content', margin: '0 0 var(--uu-space-s) 0' }} size={size}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam nulla dolorem.
      </Text>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--uu-space-s)' }}>
        <Button color="secondary" size={size}>
          Cancel
        </Button>
        <Button size={size}>Confirm</Button>
      </div>
    </>
  );
}
