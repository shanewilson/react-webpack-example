'use strict';

var webpack = require('webpack');

module.exports = {
  contentBase: __dirname + "/dist/",
  target: 'web',
  cache: true,
  bail: true,
  devtool: '#source-map',
  entry: {
    app: './src/js/app'
  },
  output: {
    path: '/dist/',
    publicPath: "/js/",
    filename: "[name].js",
    chunkFilename: '[id].js'
  },
  externals: [
    // {
    //   react: "React",
    //   'react-nested-router': "Router"
    // }
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?/,
        exclude: __dirname + '/node_modules',
        loader: 'jshint-loader!jsx-loader?harmony&insertPragma=React.DOM'
      }
    ],
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader?harmony&insertPragma=React.DOM" },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader?paths=node_modules/jeet/stylus/' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
      { test: /\.gif$/, loader: "url-loader?mimetype=image/gif" },
      { test: /\.jpe?g$/, loader: "url-loader?mimetype=image/jpeg" }
    ],
    noParse: /\.min\.js/
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.styl'],
    modulesDirectories: ['src/styl', 'src/js', 'src/js/views', 'src/js/components', 'node_modules']
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   React: "react"
    // })
  ]
};
