import React from 'react';
import Router from 'react-router';

import Breadcrumb from 'components/Breadcrumb';
import LinkTo from 'components/LinkTo';

import AuthenticatedRoute from 'components/AuthenticatedRoute';

var W = React.createClass({
  mixins: [Router.State],
  render: function() {
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

export default AuthenticatedRoute(W);
