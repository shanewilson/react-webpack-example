'use strict';

var React = require('react');
var Route = require('react-nested-router').Route;

var Home = require('./views/pages/home.jsx');
var Projects = require('./views/pages/projects.jsx');
var Project = require('./views/pages/project.jsx');
var Styleguide = require('./views/pages/styleguide.jsx');
var e404 = require('./views/pages/404.jsx');

var Routes = React.createClass({
  render: function() {
    return (
      <Route handler={this.props.app}>
        <Route name="home" path="/" handler={Home} />
        <Route name="projects" path="/projects" handler={Projects} />
        <Route name="project" path="/projects/:projectId" handler={Project} />
        <Route name="styleguide" path="/styleguide" handler={Styleguide} />
        <Route name="404" handler={e404} />
      </Route>
    );
  }
});

module.exports = Routes;
