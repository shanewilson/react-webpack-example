"use strict";

var React = require('react');

var Navigation = require('./components/navigation/navigation.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Navigation/>
        <article>{this.props.activeRoute}</article>
      </div>
    );
  }
});

module.exports = App;
