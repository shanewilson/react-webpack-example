'use strict';

var config = require('./webpack.base.config.js');

config.devServer = {
  contentBase: 'src',
  https: true,
  stats: {
    colors: true
  },
  historyApiFallback: true
};
config.module.loaders.push({test: /\.css$/, loader: 'style!css?importLoaders=1!postcss'});

module.exports = config;
