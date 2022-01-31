const path = require('path');

module.exports = {
  webpackFinal: async (config) => {
    // extensions
    config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');

    // aliases
    config.resolve.alias = {
      'components': path.resolve(__dirname, '..', 'src', 'components'),
      'constants': path.resolve(__dirname, '..', 'src', 'constants'),
      'contexts': path.resolve(__dirname, '..', 'src', 'contexts'),
      'hooks': path.resolve(__dirname, '..', 'src', 'hooks'),
      'icons': path.resolve(__dirname, '..', 'src', 'icons'),
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
            modules: { localIdentName: '[local]_[hash:base64:5]' },
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

    // svg
    const defaultSvgLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    defaultSvgLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, '..', 'src'),
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
        'url-loader',
      ],
    });

    return config;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
