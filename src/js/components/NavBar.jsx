"use strict";

var React = require('react');

var NavBar = React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]).isRequired
  },
  render: function() {
    return (
      <nav className="ns-NavBar">{this.props.children}</nav>
    );
  }
});

module.exports = NavBar;
