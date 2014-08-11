'use strict';

module.exports = {
  target: 'web',
  cache: true,
  bail: true,
  debug: false,
  profile: false,
  entry: {
    'mori': './libs/mori'
  },
  output: {
    pathInfo: false,
    publicPath: "/js/libs",
    filename: "[name].js"
  }
};
