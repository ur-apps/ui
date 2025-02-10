import React from 'react';
import type { Preview } from '@storybook/react';

import { ThemeControl } from '../src/components/theme-control';
import { ThemeProvider } from '../src/contexts/theme';

import './preview.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    //   actions: { argTypesRegex: '^on.*' },
    //   backgrounds: {
    //     disable: true,
    //     grid: { disable: true },
    //   },
    //   controls: {
    //     matchers: {
    //       color: /(background|color)$/i,
    //       date: /Date$/,
    //     },
    //   },
  },
  tags: ['autodocs'],
  // globalTypes: {
  //   theme: {
  //     description: 'Global theme for components',
  //     defaultValue: 'auto',
  //     toolbar: {
  //       title: 'Theme',
  //       items: [
  //         { value: 'light', icon: 'sun', title: 'Light' },
  //         { value: 'dark', icon: 'moon', title: 'Dark' },
  //         { value: 'auto', title: 'Auto' },
  //       ],
  //       dynamicTitle: true,
  //     },
  //   },
  // },
  decorators: [
    (Story, context) => (
      <ThemeProvider className="container" defaultTheme={context.globals.theme} key={context.globals.theme}>
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
