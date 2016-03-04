require('babel-register');
const config = require('./config/index').default;
module.exports = require('./config/webpack/' + config.get('globals').NODE_ENV).default;
