'use strict';

var Hello = require ('hello');
var a;

React.renderComponent (
  new Hello({
    page: ''
  }),
  document.getElementById('content')
);
