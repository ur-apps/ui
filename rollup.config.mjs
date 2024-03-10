import path from 'path';
import { fileURLToPath } from 'url';
import svgr from '@svgr/rollup';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import analyze from 'rollup-plugin-analyzer';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import peerDeps from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import postcssurl from 'postcss-url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_DIR = 'lib';

/** @type {(import('rollup').MergedRollupOptions)} */
export default {
  input: ['src/index.ts', 'src/utils/index.ts'],
  output: {
    dir: OUTPUT_DIR,
    format: 'es',
    preserveModules: true,
    // sourcemap: true,
  },
  plugins: [
    del({ targets: OUTPUT_DIR }),
    peerDeps(),
    alias({
      entries: {
        components: path.resolve(__dirname, 'src', 'components'),
        constants: path.resolve(__dirname, 'src', 'constants'),
        contexts: path.resolve(__dirname, 'src', 'contexts'),
        fonts: path.resolve(__dirname, 'src', 'fonts'),
        icons: path.resolve(__dirname, 'src', 'icons'),
        images: path.resolve(__dirname, 'src', 'images'),
        hooks: path.resolve(__dirname, 'src', 'hooks'),
        styles: path.resolve(__dirname, 'src', 'styles'),
        services: path.resolve(__dirname, 'src', 'services'),
        types: path.resolve(__dirname, 'src', 'types'),
        utils: path.resolve(__dirname, 'src', 'utils'),
      },
    }),
    eslint({ throwOnError: true }),
    nodeResolve(),
    commonjs(),
    typescript(),
    postcss({
      extract: 'index.css',
      modules: {
        generateScopedName: 'uu_[local]',
      },
      plugins: [
        postcssurl([
          {
            filter: '**/fonts/**/*',
            url: ({ url }) => url.replace(/^.*fonts/, 'ur-ui/fonts'),
          },
          {
            filter: '**/images/**/*',
            url: ({ url }) => url.replace(/^.*images/, 'ur-ui/images'),
          },
        ]),
      ],
      minimize: true,
      // sourceMap: true,
    }),
    url({ fileName: '[dirname][name][extname]', 'limit': null }),
    svgr(),
    copy({
      targets: [
        { src: './src/fonts/*', dest: './lib/fonts' },
        { src: './src/images/*', dest: './lib/images' },
        { src: ['./src/icons/*', '!**/*.ts', '!**/*.css'], dest: './lib/icons' },
        { src: './src/react-app.d.ts', dest: './lib' },
      ],
    }),
    analyze({ 'summaryOnly': true }),
  ],
};
