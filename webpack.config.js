const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const config = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },
    module: {
      rules: [
        {
          test: /.tsx?$/,
          oneOf: [
            {
              loader: 'ts-loader',
            },
            {
              loader: 'babel-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      /**
       * Q：Cannot find module './dll/vendor-manifest.json'
       * A：npm run build:dll 需提前构建 dll
       */
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./dll/vendor-manifest.json'),
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
      }),
    ],
  };
  if (env && env.NODE_ENV === 'development') {
    config.plugins.push(
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./dll/devserver-manifest.json'),
      }),
      new HtmlWebpackTagsPlugin({
        append: false,
        scripts: [
          'dll/vendor.dll.js',
          'dll/devserver.dll.js',
        ],
      })
    );
  } else {
    config.plugins.push(
      new HtmlWebpackTagsPlugin({
        append: false,
        scripts: [
          './vendor.dll.js',
        ],
      }),
      new CopyPlugin([
        'dll/vendor.dll.js',
      ]),
    );
  }
  
  return config;
};