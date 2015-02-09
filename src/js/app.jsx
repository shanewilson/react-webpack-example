"use strict";

var React = require('react');

var RouteHandler = require('react-router').RouteHandler;

var SiteNav = require('./views/common/SiteNav.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <SiteNav />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
