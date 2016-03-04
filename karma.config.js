require('babel-register');
const config = require('./config').default;
module.exports = require('./config/karma/' + config.get('globals').TEST_ENV).default;
