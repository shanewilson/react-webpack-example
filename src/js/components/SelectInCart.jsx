"use strict";

var React = require('react');

var CBToggle = require('../components/CBToggle.jsx');

var SelectInCart = React.createClass({
  propTypes: {
    widget: React.PropTypes.object.isRequired
  },
  handleChange: function() {
    this.props.handleChange(this.props.widget.get("id"));
  },
  render: function() {
    return (
      <CBToggle widget={this.props.widget} handleChange={this.handleChange}/>
    );
  }
});

module.exports = SelectInCart;
