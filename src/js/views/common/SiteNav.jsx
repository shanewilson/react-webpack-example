"use strict";

var React = require('react');

var Links = require('../../components/LinkTo.jsx');
var NavBar = require('../../components/NavBar.jsx');
var CartCount = require('../../components/CartCount.jsx');

var SiteNav = React.createClass({
  render: function() {
    return (
      <NavBar>
        <ul>
          <li><Links.Home /></li>
          <li><Links.Widgets /></li>
          <li><CartCount /><Links.Cart /></li>
        </ul>
      </NavBar>
    );
  }
});
/*

 <li><Links.Styleguide /></li>
 */
module.exports = SiteNav;
