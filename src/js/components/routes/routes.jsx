'use strict';

var React = require('react');
var Route = require('react-nested-router').Route;

var HomeHandler = require('../handlers/home.jsx');
var ProjectsHandler = require('../handlers/projects.jsx');
var ProjectHandler = require('../handlers/project.jsx');

var Routes = React.createClass({
  render: function() {
    return (
      <Route handler={this.props.app}>
        <Route name="Home" path="/" handler={HomeHandler} />
        <Route name="Projects" handler={ProjectsHandler} />
        <Route name="Project" path="/projects/:projectId" handler={ProjectHandler} />
      </Route>
    );
  }
});

module.exports = Routes;
