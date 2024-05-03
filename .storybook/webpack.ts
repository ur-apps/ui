import path from 'path';
import { Configuration } from 'webpack';

export function webpackOverride(config: Configuration) {
  if (!config.resolve) {
    config.resolve = {};
  }

  if (!config.module) {
    config.module = {};
  }

  if (!config.module.rules) {
    config.module.rules = [];
  }

  // aliases
  config.resolve.alias = {
    'components': path.resolve(__dirname, '..', 'src', 'components'),
    'constants': path.resolve(__dirname, '..', 'src', 'constants'),
    'contexts': path.resolve(__dirname, '..', 'src', 'contexts'),
    'data': path.resolve(__dirname, '..', 'src', 'data'),
    'fonts': path.resolve(__dirname, '..', 'src', 'fonts'),
    'icons': path.resolve(__dirname, '..', 'src', 'icons'),
    'images': path.resolve(__dirname, '..', 'src', 'images'),
    'hooks': path.resolve(__dirname, '..', 'src', 'hooks'),
    'styles': path.resolve(__dirname, '..', 'src', 'styles'),
    'services': path.resolve(__dirname, '..', 'src', 'services'),
    'types': path.resolve(__dirname, '..', 'src', 'types'),
    'utils': path.resolve(__dirname, '..', 'src', 'utils'),
  };

  // scss modules
  config.module.rules.push({
    test: /\.module\.s(a|c)ss$/,
    include: path.resolve(__dirname, '../src'),
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: { localIdentName: 'uu_[folder]__[local]' },
        },
      },
      { loader: 'sass-loader', options: { sourceMap: true } },
    ],
  });

  // scss
  config.module.rules.push({
    test: /\.s(a|c)ss$/,
    exclude: /\.module\.s(a|c)ss$/,
    use: ['style-loader', 'css-loader', { loader: 'sass-loader', options: { sourceMap: true } }],
    include: path.resolve(__dirname, '../src'),
  });

  // @ts-ignore
  const svgRule = config.module.rules.find((rule) => typeof rule === 'object' && rule!.test?.test?.('.svg'));

  if (svgRule && typeof svgRule === 'object') {
    svgRule.exclude = /\.svg$/;
  }

  config.module.rules.push({
    test: /\.svg$/,
    include: path.resolve(__dirname, '..', 'src'),
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgo: false,
          // svgoConfig: {
          //   plugins: [
          //     {
          //       name: 'removeViewBox',
          //       active: false,
          //     },
          //   ],
          // },
        },
      },
      'url-loader',
    ],
  });

  return config;
}
