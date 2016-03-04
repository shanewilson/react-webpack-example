require('babel-register');

const chalk = require('chalk');
const config = require('./config').default;
const devServer = require('./bin/webpack-dev-server').default;

const host = config.get('webpack_host');
const port = config.get('webpack_port');


devServer.listen(port, host, () => {
  console.log(`⚡  Server running at ${chalk.white(`${host}:${port}`)}`);
  console.log(`   Proxying to API running at ${chalk.white(config.get('proxy'))}`);
});
