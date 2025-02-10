import path from 'path';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  publicDir: path.resolve(__dirname, 'public'),
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
      constants: path.resolve(__dirname, 'src', 'constants'),
      contexts: path.resolve(__dirname, 'src', 'contexts'),
      data: path.resolve(__dirname, 'src', 'data'),
      fonts: path.resolve(__dirname, 'src', 'fonts'),
      icons: path.resolve(__dirname, 'src', 'icons'),
      images: path.resolve(__dirname, 'src', 'images'),
      hooks: path.resolve(__dirname, 'src', 'hooks'),
      styles: path.resolve(__dirname, 'src', 'styles'),
      services: path.resolve(__dirname, 'src', 'services'),
      types: path.resolve(__dirname, 'src', 'types'),
      utils: path.resolve(__dirname, 'src', 'utils'),
    },
  },
  plugins: [
    react(),
    url({ fileName: '[dirname][name][extname]', limit: undefined }),
    svgr({
      svgo: false,
    }),
  ],
});
