"use strict";

var React = require('react');

var LinkToProject = require('../linkTo/linkTo.jsx').LinkToProject;

var Projects = React.createClass({
  render: function() {
    return (
      <section>
        <h2>Projects</h2>
        <LinkToProject projectId="PRJ4" />
        <br />
        <LinkToProject projectId="PR4">Project 4</LinkToProject>
      </section>
    );
  }
});

module.exports = Projects;
