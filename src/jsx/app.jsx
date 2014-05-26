'use strict';

var React = require('react');
var director = require('director');
var router = director.Router().init();

var Hello = require('./components/hello.jsx');

React.renderComponent(
  new Hello({
    page: router.getRoute(0)
  }),
  document.getElementById('content')
);
