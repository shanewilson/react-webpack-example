"use strict";

var React = require('react');

var Links = require('../../components/LinkTo.jsx');

var NavBar = React.createClass({
  render: function() {
    return (
      <nav className="NavBar">
        <ul>
          <li><Links.Home>Home</Links.Home></li>
          <li><Links.Projects>Projects</Links.Projects></li>
        </ul>
        <ul>
          <li><Links.Home>Home</Links.Home></li>
          <li><Links.Projects>Projects</Links.Projects></li>
        </ul>
      </nav>
    );
  }
});

module.exports = NavBar;
