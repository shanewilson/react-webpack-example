"use strict";

require('./siteNavigation.styl');

var React = require('react');

var Navigation = require('./navigation.jsx');
var NavigationGroup = require('./navigationGroup.jsx');
var NavigationGroupItem = require('./navigationGroupItem.jsx');
var LinkTo = require('../linkTo/linkTo.jsx');
var LinkToHome = LinkTo.LinkToHome;
var LinkToProjects = LinkTo.LinkToProjects;

var SiteNavigation = React.createClass({
  render: function() {
    return (
      <Navigation>
        <NavigationGroup>
          <NavigationGroupItem><LinkToHome>Home</LinkToHome></NavigationGroupItem>
          <NavigationGroupItem><LinkToProjects>Projects</LinkToProjects></NavigationGroupItem>
        </NavigationGroup>
      </Navigation>
    );
  }
});

module.exports = SiteNavigation;
