"use strict";

var React = require('react');
var m = require('mori');

var CBToggle = React.createClass({
  propTypes: {
    widget: React.PropTypes.object.isRequired,
    handleChange: React.PropTypes.func.isRequired,
  },
  render: function() {
    var text = m.get(this.props.widget, "selected") ? "-" : "+";
    return (
      <button type="button"
      onClick={this.props.handleChange}>{text}</button>
    );
  }
});

module.exports = CBToggle;
