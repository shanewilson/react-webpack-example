"use strict";

require('styles');

var React = require('react');

var Navigation = require('navigation');
var Routes = require('routes');

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

React.renderComponent((
  <Routes app={App}/>
), document.getElementById("content"));

module.exports = App;
