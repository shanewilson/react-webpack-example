'use strict';

var webpack = require('webpack');

module.exports = {
  target: 'web',
  cache: true,
  devtool: '#source-map',
  debug: true,
  profile: true,
  stats: {
    colors: true,
    reasons: true
  },
  entry: {
    app: './src/js/app'
  },
  output: {
    pathInfo: true,
    publicPath: "/js/",
    filename: "[name].js",
    chunkFilename: '[id].js'
  },
  externals: [
    {
      react: "React"
    }
  ],
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader?harmony&insertPragma=React.DOM" },
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
    modulesDirectories: ['src/styl', 'src/js', 'src/js/views', 'src/js/components', 'node_modules']
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react"
    })
  ]
};
