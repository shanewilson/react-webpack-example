"use strict";

require('./navigationGroupStyle.styl');

var React = require('react');

var NavigationGroup = React.createClass({
  render: function() {
    return (
      <ul className="NavigationGroup">{this.props.children}</ul>
    );
  }
});

module.exports = NavigationGroup;
