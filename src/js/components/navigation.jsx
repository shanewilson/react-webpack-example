"use strict";

var React = require('react');

var LinkTo = require('linkTo');
var LinkToHome = LinkTo.Home;
var LinkToProjects = LinkTo.Projects;
var LinkToProject = LinkTo.Project;

var Navigation = React.createClass({
  render: function() {
    return (
      <aside>
        <ul>
          <li><LinkToHome>Home</LinkToHome></li>
          <li><LinkToProjects>Projects</LinkToProjects></li>
          <li><LinkToProject projectId="4">Project 4</LinkToProject></li>
        </ul>
      </aside>
    );
  }
});

module.exports = Navigation;
