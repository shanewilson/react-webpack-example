'use strict';

var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      name: 'World'
    };
  },
  render: function() {
    return (
        <h1>Hello {this.state.name}!</h1>
        );
  }
});
