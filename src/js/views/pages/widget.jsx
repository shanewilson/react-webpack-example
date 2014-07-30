"use strict";

var React = require('react');

var Breadcrumb = require('../../components/Breadcrumb.jsx');
var LinkTo = require('../../components/LinkTo.jsx');

var Widget = React.createClass({
  render: function() {
    return (
      <div>
        <aside>aside</aside>
        <article>
          <Breadcrumb>
            <li><LinkTo.Widgets /></li>
            <li>{this.props.params.widgetId}</li>
          </Breadcrumb>
          <h1>Widget {this.props.params.widgetId}</h1>
          <section>
            <h2>Stuff</h2>
            <p>lablhlhlhbal bhl hbal hbalb h</p>
          </section>
        </article>
      </div>
    );
  }
});

module.exports = Widget;
