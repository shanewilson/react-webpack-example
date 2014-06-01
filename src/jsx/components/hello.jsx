'use strict';

var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      name: 'Webpack'
    };
  },
  render: function() {
    return (
        <h1>Hello {this.state.name}!</h1>
        );
  }
});
