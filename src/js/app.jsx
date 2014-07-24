"use strict";

var React = require('react');

var NavBar = require('./views/common/NavBar.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar />
        <this.props.activeRouteHandler/>
      </div>
    );
  }
});

module.exports = App;
