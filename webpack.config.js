const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, 'src'),
  entry: './index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'constants': path.resolve(__dirname, 'src/constants'),
      'context': path.resolve(__dirname, 'src/context'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'img': path.resolve(__dirname, 'src/img'),
      'scss': path.resolve(__dirname, 'src/scss'),
      'services': path.resolve(__dirname, 'src/services'),
      'types': path.resolve(__dirname, 'src/types'),
      'utils': path.resolve(__dirname, 'src/utils'),
    },
  },

  externals: {
    react: 'react',
  },

  module: {
    rules: [
      //-------------------- scripts --------------------
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      //-------------------- css styles --------------------
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
        exclude: /\.module\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      //-------------------- scss styles --------------------
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: { localIdentName: '[local]_[hash:base64:5]' },
            },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module\.s(a|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      //-------------------- images --------------------
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/img',
              name: '[name]-[hash:7].[ext]',
            },
          },
        ],
      },
      //-------------------- fonts --------------------
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/fonts',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'img', to: 'static/img' }],
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name]-[hash:5].css',
    }),
  ],
};
