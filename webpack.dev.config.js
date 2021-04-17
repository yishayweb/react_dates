/* eslint-disable prettier/prettier */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './indexDev.tsx',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'index.html',
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ['ts-loader', 'eslint-loader'],
        exclude: '/node_modules/'
      },
      {
          test: /\.css$/,
          use: [
              MiniCssExtractPlugin.loader, 'css-loader'
          ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'index.html'),
      minify: false
    })
  ]
}