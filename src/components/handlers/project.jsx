"use strict";

var React = require('react');
var Constrainable = require('rnr-constrained-route');

var Project = React.createClass({
  mixins : [Constrainable],
  statics : {
    redirectTo : '404',
    paramConstraints : {
      projectId : /^PR\d+$/
    },
  },
  render: function() {
    return <h2>Project {this.props.params.projectId}</h2>;
  }
});

module.exports = Project;
