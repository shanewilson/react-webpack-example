import path from 'path';
import express from 'express';
import proxy from 'express-http-proxy';
import gzipStatic from 'connect-gzip-static';
import webpack from 'webpack';

import config from '../config';
import webpackConfig from '../webpack.config';

const app = express();

const isDevelopment = config.get('env').NODE_ENV === 'development';
const staticDir = config.get(isDevelopment ? 'dir_src' : 'dir_dist');
const indexFile = path.join(isDevelopment ? '' : config.get('globals').__BASE__, 'index.html');

app.use(gzipStatic(staticDir));

if (isDevelopment) {
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, webpackConfig.devServer));
  app.use(require('webpack-hot-middleware')(compiler));

  console.log('⌛  Webpack bundling assets for the first time...');
}

app.use('/api', proxy(config.get('proxy'), {
  forwardPath: req => (
    require('url').parse(req.url).path
  ),
}));

app.get(/^((?!(.js|.css|.ico)).)*$/, (req, res) => {
  res.sendFile(path.join(staticDir, indexFile));
});

export default app;
