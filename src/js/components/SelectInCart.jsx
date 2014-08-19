"use strict";

var React = require('react');
var m = require('mori');

var CBToggle = require('../components/CBToggle.jsx');

var SelectInCart = React.createClass({
  propTypes: {
    widget: React.PropTypes.object.isRequired
  },
  handleChange: function() {
    this.props.handleChange(m.get(this.props.widget, "id"));
  },
  render: function() {
    return (
      <CBToggle widget={this.props.widget} handleChange={this.handleChange}/>
    );
  }
});

module.exports = SelectInCart;
