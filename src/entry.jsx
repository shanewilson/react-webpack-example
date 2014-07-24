"use strict";

require('./styles/styles.styl');

var React = require('react');

var App = require('./js/app.jsx');
var Routes = require('./js/routes.jsx');

React.renderComponent((
  <Routes app={App}/>
), document.getElementById("app"));
