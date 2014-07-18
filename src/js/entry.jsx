"use strict";

var React = require('react');

var App = require('./components/app/app.jsx');
var Routes = require('./components/routes/routes.jsx');

React.renderComponent((
  <Routes app={App}/>
), document.getElementById("content"));
