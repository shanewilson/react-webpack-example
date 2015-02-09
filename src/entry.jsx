"use strict";

require('./styles/styles.styl');

var React = require('react');
var Router = require('react-router');

var routes = require('./js/routes.jsx');

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById("app"));
});