import React from 'react';
import type { Preview } from '@storybook/react';

import './preview.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    backgrounds: {
      disable: true,
      grid: { disable: true },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'auto',
      toolbar: {
        title: 'Theme',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
          { value: 'auto', title: 'Auto' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="container">
        <div className="section section--primary">
          <Story />
        </div>
        <div className="section section--secondary">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default preview;
