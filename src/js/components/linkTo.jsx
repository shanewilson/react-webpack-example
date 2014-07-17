"use strict";

var React = require('react');

var Link = require('react-nested-router').Link;

var Home = React.createClass({
  render: function() {
    return <Link to="home">{this.props.children}</Link>;
  }
});

var Projects = React.createClass({
  render: function() {
    return <Link to="projects">{this.props.children}</Link>;
  }
});

var Project = React.createClass({
  render: function() {
    return <Link to="project" projectId={this.props.projectId}>{this.props.children}</Link>;
  }
});

module.exports = {
  Home: Home,
  Projects: Projects,
  Project: Project,
};
