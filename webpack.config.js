const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'components': path.resolve(__dirname, 'src', 'components'),
      'constants': path.resolve(__dirname, 'src', 'constants'),
      'context': path.resolve(__dirname, 'src', 'context'),
      'hooks': path.resolve(__dirname, 'src', 'hooks'),
      'icons': path.resolve(__dirname, 'src', 'icons'),
      'scss': path.resolve(__dirname, 'src', 'scss'),
      'services': path.resolve(__dirname, 'src', 'services'),
      'types': path.resolve(__dirname, 'src', 'types'),
      'utils': path.resolve(__dirname, 'src', 'utils'),
    },
  },

  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
  },

  module: {
    rules: [
      //-------------------- scripts --------------------
      {
        test: /\.(js|ts)x?$/,
        use: ['ts-loader'],
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
      },
      //-------------------- css styles --------------------
      {
        test: /\.module\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[local]_[hash:base64:5]' },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      //-------------------- scss styles --------------------
      {
        test: /\.module\.s(a|c)ss$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: { localIdentName: '[local]_[hash:base64:5]' },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /\.module\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      //-------------------- images --------------------
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        include: path.resolve(__dirname, 'src'),
        type: 'asset/inline',
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src'),
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
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/**/*.svg', to: 'icons/[name][ext]' },
        { from: 'src/scss', to: 'scss' },
      ],
    }),
  ],
};
