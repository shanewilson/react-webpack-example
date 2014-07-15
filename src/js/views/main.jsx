"use strict";

var RRouter = require("rrouter");
var Link = RRouter.Link;

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Main page</h1>
        <Link to="/about">Go to about</Link>
      </div>
    );
  }
});

module.exports = Main;
