"use strict";

var React = require('react');
var m = require('mori');

var CBToggle = React.createClass({
  propTypes: {
    widget: React.PropTypes.object.isRequired,
    handleChange: React.PropTypes.func.isRequired,
  },
  render: function() {
    return (
      <input type="checkbox"
      checked={m.get(this.props.widget, "selected")}
      onChange={this.props.handleChange} />
    );
  }
});

module.exports = CBToggle;
