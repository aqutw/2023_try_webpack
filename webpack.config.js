const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

let MODE = process.env.MODE;
console.log('MODE :', MODE);
if (!['production', 'development'].includes(MODE)) {
  MODE = 'production'
}



module.exports = {
  mode: MODE,
  entry: './src/index.js',
  devServer: { hot: true, static: './public' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.[hash].js'
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader /*'style-loader'*/, 'css-loader'],
    },
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.[hash].css'
    })]
}
