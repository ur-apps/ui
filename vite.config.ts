/// <reference types="vitest/config" />

import path from 'node:path';
import react from '@vitejs/plugin-react';
import { BuildEnvironmentOptions, defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import pkg from './package.json' with { type: 'json' };

const peerDependencies = Object.keys(pkg.peerDependencies);

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  build: getBuildOptions(mode),
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
      svgrOptions: {
        exportType: 'named',
        namedExport: 'ReactComponent',
        jsxRuntime: 'automatic',
      },
    }),
  ],
  css: { modules: { generateScopedName: 'uu_[folder]__[local]' } },
  test: {
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['**/index.{ts,tsx}', '**/*.stories.{ts,tsx}', 'src/data/**'],
    },
  },
}));

function getBuildOptions(mode: string): BuildEnvironmentOptions | undefined {
  if (mode === 'lib') {
    return {
      outDir: path.resolve(import.meta.dirname, 'lib'),
      minify: false,
      cssMinify: true,
      cssCodeSplit: false,
      lib: {
        entry: {
          'index': path.resolve(import.meta.dirname, 'src', 'index.ts'),
          'utils/index': path.resolve(import.meta.dirname, 'src', 'utils', 'index.ts'),
        },
        formats: ['es'],
        cssFileName: 'index',
      },
      rolldownOptions: {
        external: (id) => peerDependencies.some((name) => id === name || id.startsWith(`${name}/`)),
        output: {
          preserveModules: true,
          preserveModulesRoot: path.resolve(import.meta.dirname, 'src'),
          entryFileNames: '[name].js',
        },
      },
    };
  }
}
