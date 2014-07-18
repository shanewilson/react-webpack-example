"use strict";

require('./styles.styl');

var React = require('react');

var App = require('./app.jsx');
var Routes = require('./components/routes/routes.jsx');

React.renderComponent((
  <Routes app={App}/>
), document.getElementById("content"));
