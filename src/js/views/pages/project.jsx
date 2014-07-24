"use strict";

var React = require('react');

var Breadcrumb = require('../../components/Breadcrumb.jsx');
var LinkTo = require('../../components/LinkTo.jsx');

var Project = React.createClass({
  render: function() {
    return (
      <div>
        <aside>aside</aside>
        <article>
          <Breadcrumb>
            <li><LinkTo.Projects /></li>
            <li>{this.props.params.projectId}</li>
          </Breadcrumb>
          <h1>Project {this.props.params.projectId}</h1>
          <section>
            <h2>Stuff</h2>
            <p>lablhlhlhbal bhl hbal hbalb h</p>
          </section>
        </article>
      </div>
    );
  }
});

module.exports = Project;
