"use strict";

var React = require('react');
var Router = require('react-router');

var Breadcrumb = require('../../components/Breadcrumb.jsx');
var LinkTo = require('../../components/LinkTo.jsx');

var Widget = React.createClass({
  mixins: [ Router.State ],
  render: function () {
    return (
        <div>
          <aside>aside</aside>
          <article>
            <Breadcrumb>
              <li>
                <LinkTo.Widgets />
              </li>
              <li>{this.getParams().widgetId}</li>
            </Breadcrumb>
            <h1>Widget {this.getParams().widgetId}</h1>
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
