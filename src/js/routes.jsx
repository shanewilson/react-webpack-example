'use strict';

var React = require('react');
var Route = require('react-nested-router').Route;

var HomeView = require('./views/home');
var ProjectsView = require('./views/projects');
var ProjectView = require('./views/project');

var Routes = React.createClass({
  render: function() {
    return (
      <Route handler={this.props.app}>
        <Route name="home" path="/" handler={HomeView} />
        <Route name="projects" handler={ProjectsView} />
        <Route name="project" path="/projects/:projectId" handler={ProjectView} />
      </Route>
    );
  }
});

module.exports = Routes;
