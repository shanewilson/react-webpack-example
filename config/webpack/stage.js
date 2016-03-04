import webpack from 'webpack';

import HtmlInject from './plugins/html-inject';

import config from '../';
import webpackConfig from './_base';

const LIBS_BUNDLE = 'libs';

export default {
  ...webpackConfig,
  entry: {
    ...webpackConfig.entry,
    [LIBS_BUNDLE]: config.get('dependencies')
  },
  output: {
    ...webpackConfig.output,
    filename: '[name].[hash].js',
    chunkFilename: '[id].js'
  },
  plugins: [
    ...webpackConfig.plugins,
    new webpack.optimize.CommonsChunkPlugin(LIBS_BUNDLE, `${LIBS_BUNDLE}.[hash].js`),
    new HtmlInject()
  ]
};
