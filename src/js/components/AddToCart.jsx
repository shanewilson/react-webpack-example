"use strict";

var React = require('react');

var CartActions = require('../actions/CartActions.js');

var AddToCart = React.createClass({
  propTypes: {
    widget: React.PropTypes.object.isRequired
  },
  _onChange: function() {
    console.log(this.props.widget);
    if (this.props.widget.selected) {
      CartActions.remove(this.props.widget.id);
    } else {
      CartActions.add(this.props.widget);
    }
  },
  render: function() {
    return (
      <input type="checkbox"
      checked={this.props.widget.selected}
      onChange={this._onChange} />
    );
  }
});

module.exports = AddToCart;
