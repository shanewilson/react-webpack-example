'use strict';

var React = require('react/addons');
var PureRenderMixin = React.addons.PureRenderMixin;

var Route = require('react-router').Route;
var Routes = require('react-router').Routes;

var Home = require('./views/pages/home.jsx');
var Projects = require('./views/pages/projects.jsx');
var Project = require('./views/pages/project.jsx');
var Styleguide = require('./views/pages/styleguide.jsx');
var e404 = require('./views/pages/404.jsx');

var AppRoutes = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <Routes>
        <Route handler={this.props.app}>
          <Route name="home" path="/" handler={Home} />
          <Route name="projects" path="/projects" handler={Projects} />
          <Route name="project" path="/projects/:projectId" handler={Project} />
          <Route name="styleguide" path="/styleguide" handler={Styleguide} />
          <Route name="404" handler={e404} />
        </Route>
      </Routes>
    );
  }
});

module.exports = AppRoutes;
