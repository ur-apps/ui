const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
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

    // css modules
    // config.module.rules.push({
    //   test: /\.module\.css$/,
    //   include: path.resolve(__dirname, '../src'),
    //   use: [
    //     'style-loader',
    //     {
    //       loader: 'css-loader',
    //       options: {
    //         modules: { localIdentName: '[local]_[hash:base64:5]' },
    //       },
    //     },
    //   ],
    // });

    // css
    // config.module.rules.push({
    //   test: /\.css$/,
    //   include: path.resolve(__dirname, '../src'),
    //   exclude: /\.module\.css$/,
    //   use: ['style-loader', 'css-loader'],
    // });

    return config;
  },
  'stories': ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  'addons': ['@storybook/addon-links', '@storybook/addon-essentials'],
  'framework': '@storybook/react',
  'core': {
    'builder': 'webpack5',
  },
};
