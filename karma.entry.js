const context = require.context('./src/js/', true, /.+\.test\.jsx?$/);
context.keys().forEach(context);
module.exports = context;
