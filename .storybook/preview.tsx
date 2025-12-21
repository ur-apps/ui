import type { Preview } from '@storybook/react-vite';

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
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
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
