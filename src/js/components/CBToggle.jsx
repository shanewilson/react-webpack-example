"use strict";

var React = require('react');

var CBToggle = React.createClass({
  propTypes: {
    widget: React.PropTypes.object.isRequired,
    handleChange: React.PropTypes.func.isRequired,
  },
  render: function() {
    var text = this.props.widget.get("selected") ? "-" : "+";
    return (
      <button type="button"
      onClick={this.props.handleChange}>{text}</button>
    );
  }
});

module.exports = CBToggle;
