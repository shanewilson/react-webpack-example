"use strict";

var React = require('react');

var LinkTo = require('../../components/LinkTo.jsx');

var Projects = React.createClass({
  render: function() {
    return (
      <div>
        <aside>aside</aside>
        <article>
          <h1>Projects</h1>
          <section>
            <h2>List</h2>
            <p><LinkTo.Project projectId="PR1" /></p>
            <p><LinkTo.Project projectId="PR2">Project 2</LinkTo.Project></p>
          </section>
        </article>
      </div>
    );
  }
});

module.exports = Projects;
