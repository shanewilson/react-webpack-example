"use strict";

require('./navigationGroupItemStyle.styl');

var React = require('react');

var NavigationGroupItem = React.createClass({
  render: function() {
    return (
      <li className="NavigationGroupItem">{this.props.children}</li>
    );
  }
});

module.exports = NavigationGroupItem;
