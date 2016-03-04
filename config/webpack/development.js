import webpack from 'webpack';

import config from '../';
import webpackConfig from './_base';

const devServer = {
  contentBase: config.get('dir_src'),
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
  publicPath: webpackConfig.output.publicPath,
};

export default {
  ...webpackConfig,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    ...webpackConfig.entry,
    bundle: [
      'webpack-hot-middleware/client?reload=true',
      ...webpackConfig.entry.bundle,
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...webpackConfig.plugins,
  ],
  devServer,
};
