"use strict";

require('./linkToStyle.styl');

var React = require('react');

var Link = require('react-nested-router').Link;

var LinkTo = React.createClass({
  propTypes: {
    children: React.PropTypes.string.isRequired,
    target: React.PropTypes.string.isRequired
  },
  render: function() {
    var target = this.props.target;
    return this.transferPropsTo(
      <Link className={"LinkTo LinkTo" + target} to={target}>{this.props.children}</Link>
    );
  }
});

var LinkToHome = React.createClass({
  propTypes: {
    children: React.PropTypes.string.isRequired
  },
  render: function() {
    return <LinkTo target="Home">{this.props.children}</LinkTo>;
  }
});

var LinkToProjects = React.createClass({
  propTypes: {
    children: React.PropTypes.string.isRequired
  },
  render: function() {
    return <LinkTo target="Projects">{this.props.children}</LinkTo>;
  }
});

var LinkToProject = React.createClass({
  propTypes: {
    children: React.PropTypes.string,
    projectId:  React.PropTypes.string.isRequired
  },
  render: function() {
    var linkName = this.props.children || this.props.projectId;
    return <LinkTo target="Project" projectId={this.props.projectId}>{linkName}</LinkTo>;
  }
});

module.exports = {
  LinkTo: LinkTo,
  LinkToHome: LinkToHome,
  LinkToProjects: LinkToProjects,
  LinkToProject: LinkToProject,
};
