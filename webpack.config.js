'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'web',
  cache: true,
  stats: {
    colors: true,
    reasons: true
  },
  entry: {
    head: './src/js/head',
    app: './src/js/app'
  },
  output: {
    publicPath: "/js/",
    filename: "[name].js"
  },
  externals: [
    {
      react: "React"
    }
  ],
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader?insertPragma=React.DOM" },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
      { test: /\.gif$/, loader: "url-loader?mimetype=image/gif" },
      { test: /\.jpe?g$/, loader: "url-loader?mimetype=image/jpeg" }
    ],
    noParse: /\.min\.js/
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.styl'],
    modulesDirectories: ['src/styl', 'src/js', 'src/js/components', 'node_modules']
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react"
    })
  ]
};
