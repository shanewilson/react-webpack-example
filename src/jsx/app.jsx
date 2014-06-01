'use strict';

var React = require('react');

var Hello = require('hello');

React.renderComponent(
  new Hello({
    page: ''
  }),
  document.getElementById('content')
);
