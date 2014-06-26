"use strict";

var Hello = require("hello");
// TODO do something
React.renderComponent(
  new Hello({
    page: ""
  }),
  // FIXME problem here
  document.getElementById("content")
);
