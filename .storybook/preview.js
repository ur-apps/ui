import React from 'react';

import { ThemeProvider } from '../src/context';
import '../src/scss/main.scss';

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      {
        name: 'White',
        value: '#fff',
      },
      {
        name: 'Light gray',
        value: '#f5f5f5',
      },
      {
        name: 'Dark gray',
        value: '#0f0f0f',
      },
      {
        name: 'Black',
        value: '#000',
      },
    ],
  },
};
