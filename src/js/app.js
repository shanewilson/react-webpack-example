'use strict';

var Hello = require('hello');

React.renderComponent(
  new Hello({
    page: ''
  }),
  document.getElementById('content')
);
