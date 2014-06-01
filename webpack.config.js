'use strict';

var path = require('path');
var webpack = require('webpack');
var jshintrc = require('./.jshintrc.json');

module.exports = {
  contentBase: __dirname + "/src/",
  target: 'web',
  cache: true,
  entry: {
    head: './src/jsx/head',
    app: './src/jsx/app'
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    preLoaders: [
      {
        test: "\\.jsx?$",
        exclude: ["(node|web)_modules", "jam"],
        loader: "jsxhint"
      }
    ],
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader?insertPragma=React.DOM" },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.png/, loader: "url-loader?mimetype=image/png" },
      { test: /\.gif/, loader: "url-loader?mimetype=image/gif" },
      { test: /\.jpe?g/, loader: "url-loader?mimetype=image/jpeg" }
    ],
    noParse: /\.min\.js/
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.styl'],
    modulesDirectories: ['src/images', 'src/styl', 'src/jsx', 'src/jsx/components', 'node_modules']
  },
  plugins: []
};
