"use strict";

var React = require('react');

var SiteNav = require('./views/common/SiteNav.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <SiteNav />
        <this.props.activeRouteHandler/>
      </div>
    );
  }
});

module.exports = App;
