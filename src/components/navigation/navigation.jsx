"use strict";

require('./navigationStyle.styl');

var React = require('react');

var Navigation = React.createClass({
  render: function() {
    return (
      <nav>{this.props.children}</nav>
    );
  }
});

module.exports = Navigation;
