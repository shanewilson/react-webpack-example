/* global document */
"use strict";

require('./styles/styles.styl');

var React = require("react/addons");
var Router = require('react-router');
var routes = require('./js/routes.jsx');

document.addEventListener("DOMContentLoaded", function(event) {
  Router.run(routes, Router.HistoryLocation, function (Handler, state) {
    React.render(<Handler/>, document.getElementById("app"));
  });
});