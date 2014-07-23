"use strict";

var React = require('react');

var Project = React.createClass({
  render: function() {
    return (
      <div>
        <aside>aside</aside>
        <article>
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
