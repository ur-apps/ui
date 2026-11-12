import path from 'node:path';
import config from '@urapps/eslint-config/react';
import storybookPlugin from 'eslint-plugin-storybook';
import { defineConfig, includeIgnoreFile } from 'eslint/config';

export default defineConfig(
  config,
  storybookPlugin.configs['flat/recommended'],
  includeIgnoreFile(path.resolve(import.meta.dirname, '.gitignore')),
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
);
