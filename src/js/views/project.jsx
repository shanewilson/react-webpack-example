"use strict";

var React = require('react');

var Project = React.createClass({
  render: function() {
    return <h2>Project {this.props.params.projectId}</h2>;
  }
});

module.exports = Project;
