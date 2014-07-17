"use strict";

var React = require('react');

var App = require('./app.jsx');
var Routes = require('./routes.jsx');

React.renderComponent((
  <Routes app={App}/>
), document.getElementById("content"));
