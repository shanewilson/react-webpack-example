'use strict';

var Hello = require('hello');
// TODO do soemthing
React.renderComponent(
  new Hello({
    page: ''
  }),
  // FIXME problem here
  document.getElementById('content')
);
