import { useLayoutEffect, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { Heading } from '../heading';
import { Text } from '../text';

import { Tooltip } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,

  argTypes: {
    variant: {
      control: 'radio',
      options: ['filled'],
    },
    color: {
      control: 'inline-radio',
    },
    shape: {
      control: 'inline-radio',
    },
    size: {
      control: 'inline-radio',
    },
    placement: {
      control: 'inline-radio',
    },
    trigger: {
      control: 'inline-radio',
    },
  },
  args: {
    variant: 'filled',
    color: 'primary',
    shape: 'default',
    size: 'm',
    placement: 'top',
    trigger: 'hover',
    showDelay: 100,
    hideDelay: 200,
    throttleInterval: 100,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const ref = useRef<HTMLButtonElement>(null);

    return (
      <>
        <Button ref={ref}>Hover me</Button>

        <Tooltip
          {...args}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
          anchor={ref}>
          <Heading tag="h6">Lorem ipsum dolor</Heading>
          <Text size="s">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Text>
        </Tooltip>
      </>
    );
  },
};

export const Scrollable: Story = {
  args: {
    trigger: 'manual',
  },
  render: (args) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useLayoutEffect(() => {
      buttonRef.current?.scrollIntoView({ block: 'center', inline: 'center' });
    }, []);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '1500px',
          height: '1500px',
          minWidth: '100%',
          minHeight: '100%',
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='50px' width='128px'><text x='0' y='16' font-family='sans-serif' fill='lightgray' font-size='16'>scroll me</text></svg>")`,
        }}>
        <Button style={{ width: 'max-content' }} ref={buttonRef}>
          Scroll page
        </Button>

        <Tooltip {...args} anchor={buttonRef}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Tooltip>
      </div>
    );
  },
};

export const Placements: Story = {
  args: {
    trigger: 'manual',
  },
  render: (args) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <Button ref={buttonRef}>4 positions</Button>
        <Tooltip {...args} anchor={buttonRef} placement="top">
          Top
        </Tooltip>
        <Tooltip {...args} anchor={buttonRef} placement="bottom">
          Bottom
        </Tooltip>
        <Tooltip {...args} anchor={buttonRef} placement="left">
          Left
        </Tooltip>
        <Tooltip {...args} anchor={buttonRef} placement="right">
          Right
        </Tooltip>
      </>
    );
  },
};

export const Colors: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  render: (args) => {
    const primaryRef = useRef<HTMLButtonElement>(null);
    const secondaryRef = useRef<HTMLButtonElement>(null);
    const contrastRef = useRef<HTMLButtonElement>(null);
    const successRef = useRef<HTMLButtonElement>(null);
    const warningRef = useRef<HTMLButtonElement>(null);
    const dangerRef = useRef<HTMLButtonElement>(null);

    return (
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button color="primary" ref={primaryRef}>
          Primary
        </Button>
        <Tooltip {...args} color="primary" anchor={primaryRef} />

        <Button color="secondary" ref={secondaryRef}>
          Secondary
        </Button>
        <Tooltip {...args} color="secondary" anchor={secondaryRef} />

        <Button color="secondary" ref={contrastRef}>
          Contrast
        </Button>
        <Tooltip {...args} color="contrast" anchor={contrastRef} />

        <Button color="success" ref={successRef}>
          Success
        </Button>
        <Tooltip {...args} color="success" anchor={successRef} />

        <Button color="warning" ref={warningRef}>
          Warning
        </Button>
        <Tooltip {...args} color="warning" anchor={warningRef} />

        <Button color="danger" ref={dangerRef}>
          Danger
        </Button>
        <Tooltip {...args} color="danger" anchor={dangerRef} />
      </div>
    );
  },
};

export const Sizes: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  render: (args) => {
    const smallRef = useRef<HTMLButtonElement>(null);
    const mediumRef = useRef<HTMLButtonElement>(null);
    const largeRef = useRef<HTMLButtonElement>(null);

    return (
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button color="success" ref={smallRef}>
          Small
        </Button>
        <Tooltip {...args} color="success" size="s" anchor={smallRef} />

        <Button color="warning" ref={mediumRef}>
          Medium
        </Button>
        <Tooltip {...args} color="warning" size="m" anchor={mediumRef} />

        <Button color="danger" ref={largeRef}>
          Large
        </Button>
        <Tooltip {...args} color="danger" size="l" anchor={largeRef} />
      </div>
    );
  },
};

export const Triggers: Story = {
  render: () => {
    const hoverRef = useRef<HTMLButtonElement>(null);
    const clickRef = useRef<HTMLButtonElement>(null);
    const manualRef = useRef<HTMLButtonElement>(null);

    return (
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div>
          <Button color="success" ref={hoverRef}>
            Hover me
          </Button>
          <Tooltip anchor={hoverRef} trigger="hover">
            Triggered on hover
          </Tooltip>
        </div>

        <div>
          <Button color="warning" ref={clickRef}>
            Click me
          </Button>
          <Tooltip anchor={clickRef} trigger="click">
            Triggered on click
          </Tooltip>
        </div>

        <div>
          <Button color="danger" ref={manualRef}>
            Always visible
          </Button>
          <Tooltip anchor={manualRef} trigger="manual">
            Always visible tooltip
          </Tooltip>
        </div>
      </div>
    );
  },
};
