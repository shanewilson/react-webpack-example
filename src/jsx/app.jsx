'use strict';

var React = require('react');

var Hello = require('./components/hello.jsx');
console.log('here');
React.renderComponent(
  new Hello({
    page: ''//router.getRoute(0)
  }),
  document.getElementById('content')
);
