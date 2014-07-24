"use strict";

var React = require('react');

var Links = require('../../components/LinkTo.jsx');
var NavBar = require('../../components/NavBar.jsx');

var SiteNav = React.createClass({
  render: function() {
    return (
      <NavBar>
        <ul>
          <li><Links.Home /></li>
          <li><Links.Projects /></li>
          <li><Links.Styleguide /></li>
        </ul>
      </NavBar>
    );
  }
});

module.exports = SiteNav;
