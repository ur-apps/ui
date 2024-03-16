import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Portal } from './portal';

const meta = {
  title: 'Components/Portal',
  component: Portal,
} satisfies Meta<typeof Portal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    children: (
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: 'calc(50%)',
          maxWidth: '480px',
          padding: 'var(--uu-space-m)',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'var(--uu-color-warning-300)',
          borderRadius: 'var(--uu-radius-m)',
          textAlign: 'center',
        }}>
        <h3>This element is placed in the portal</h3>
        <p>
          Portals let your components render some of their children into a different place in the DOM. This lets a part
          of your component “escape” from whatever containers it may be in. For example, a component can display a modal
          dialog or a tooltip that appears above and outside of the rest of the page.
          <br />
          <a href="https://react.dev/reference/react-dom/createPortal" target="_blank" rel="noreferrer">
            Read more here
          </a>
        </p>
        <p style={{ color: 'var(--uu-color-danger-700)', fontWeight: 'var(--uu-font-weight-700)' }}>
          In order for the portal to work, it is necessary to add an element with id &quot;portal&quot; to the html
          document:
        </p>
        <pre>&lt;div id=&quot;portal&quot;&gt;&lt;/div&gt;</pre>
      </div>
    ),
  },
};
