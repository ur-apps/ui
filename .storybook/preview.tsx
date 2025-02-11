import React from 'react';
import type { Preview } from '@storybook/react';

import { ThemeControl } from '../src/components/theme-control';
import { ThemeProvider } from '../src/contexts/theme';

import './preview.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    backgrounds: {
      disable: true,
      grid: { disable: true },
    },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider className="container">
        <div className="section section--primary">
          <Story />
        </div>
        <div className="section section--secondary">
          <Story />
        </div>
        <ThemeControl className="theme-control" size="s" />
      </ThemeProvider>
    ),
  ],
};

export default preview;
