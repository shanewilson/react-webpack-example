'use strict';

require('../styl/styles');

var React = require('react');

var Hello = require('./components/hello.jsx');

React.renderComponent(
  new Hello({
    page: ''
  }),
  document.getElementById('content')
);
