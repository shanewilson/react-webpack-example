import webpack from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';

import webpackConfig from './stage';

export default {
  ...webpackConfig,
  bail: true,
  debug: false,
  profile: false,
  pathInfo: false,
  output: {
    ...webpackConfig.output,
    pathInfo: false,
  },
  plugins: [
    ...webpackConfig.plugins,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['require', 'export', '$super'],
      },
      compress: {
        warnings: false,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: false,
      },
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};
