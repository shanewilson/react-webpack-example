"use strict";

var React = require('react');

var LinkTo = require('../../components/LinkTo.jsx');

var Projects = React.createClass({
   getInitialState: function() {
    return {
        projects: []
    };
  },
  componentDidMount: function() {
    setTimeout(function(){
      if (this.isMounted()) {
        this.setState({
          projects: [
            {
              id: "PR1",
              name: "Project 1",
            },
            {
              id: "PR2",
              name: "Project 2",
            }
          ]
        });
      }
    }.bind(this), 2000);
  },
  render: function() {
    return (
      <div>
        <aside>aside</aside>
        <article>
          <h1>Projects</h1>
          <section>
            <h2>List</h2>
           {this.state.projects.map(function(project) {
             return <p key={project.id}><LinkTo.Project projectId={project.id}>{project.name}</LinkTo.Project></p>;
           })}
          </section>
        </article>
      </div>
    );
  }
});

module.exports = Projects;
