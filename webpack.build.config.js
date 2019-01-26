const webpack = require('webpack');
const path = require('path');

module.exports = {

  mode: 'development',

  entry: {
    demo01: './demo01/demo01.js',
    demo02: './demo02/demo02.js',
    demo03: './demo03/demo03.js',
    demo04: './demo04/demo04.js',
    demo05: './demo05/demo05.js',
    demo06: './demo06/demo06.js',
    demo07: './demo07/demo07.js',
    demo08: './demo08/demo08.js',
    demo09: './demo09/demo09.js',
    demo10: './demo10/demo10.js',
    demo11: './demo11/demo11.js',
    demo12: './demo12/demo12.js',
    demo13: './demo13/demo13.js',
    demo14: './demo14/demo14.js',
    demo15: './demo15/demo15.js'
  },

  output: {
    path: path.resolve(__dirname, './'),
    filename: '[name]/build.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif|ttf|otf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      }
    ]
  },

  performance: {
    hints: false
  }

};
