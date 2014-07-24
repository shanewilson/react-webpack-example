"use strict";

var React = require('react');

var Links = require('../../components/LinkTo.jsx');

var NavBar = React.createClass({
  render: function() {
    return (
      <nav className="ns-NavBar">
        <ul>
          <li><Links.Home>Home</Links.Home></li>
          <li><Links.Projects /></li>
          <li><Links.Styleguide /></li>
        </ul>
      </nav>
    );
  }
});

module.exports = NavBar;
