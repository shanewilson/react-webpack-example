import path from 'path';

const config = new Map();

// ------------------------------------
// Project
// ------------------------------------
config.set('path_project', path.resolve(__dirname, '..'));

// ------------------------------------
// User Configuration
// ------------------------------------
// NOTE: Due to limitations with Webpack's custom require, which is used for
// looking up all *.spec.js files, if you edit dir_test you must also edit
// the path in ~/karma.entry.js.
config.set('dir_src', path.join(config.get('path_project'), 'src'));
config.set('dir_dist', path.join(config.get('path_project'), 'dist'));

config.set('webpack_host', process.env.HOST || 'localhost');
config.set('webpack_port', process.env.PORT || 8080);
config.set('proxy', process.env.PROXY || 'http://localhost:5000');

/*  *********************************************
-------------------------------------------------

All Internal Configuration Below
Edit at Your Own Risk

-------------------------------------------------
************************************************/
// ------------------------------------
// Environment
// ------------------------------------
config.set('env', process.env);
config.set('globals', {
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  },
  NODE_ENV: process.env.NODE_ENV || 'stage',
  __DEV__: process.env.NODE_ENV === 'development',
  __PROD__: process.env.NODE_ENV === 'production',
  __DEBUG__: process.env.NODE_ENV === 'development' && parseInt(process.env.DEBUG, 10) === 1,
  TEST_ENV: process.env.CI ? 'ci' : (process.env.TEST_ENV || 'single'),
  __BASE__: process.env.BASE || '',
});

// ------------------------------------
// Webpack
// ------------------------------------
config.set('webpack_public_path',
  `http://${config.get('webpack_host')}:${config.get('webpack_port')}/`
);

// ------------------------------------
// Utilities
// ------------------------------------
const packageJSON = require(path.join(config.get('path_project'), 'package.json'));
const dependencies = Object.keys(packageJSON.dependencies);

config.set('dependencies', dependencies);

export default config;
