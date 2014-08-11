"use strict";

var React = require('react');

var Breadcrumb = React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]).isRequired
  },
  render: function() {
    return <ul className="ns-Breadcrumb">{this.props.children}</ul>;
  }
});

module.exports = Breadcrumb;
