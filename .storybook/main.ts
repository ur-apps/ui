import type { StorybookConfig } from '@storybook/react-webpack5';
import { webpackOverride } from './webpack';

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
  ],
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: webpackOverride,
};

export default config;
