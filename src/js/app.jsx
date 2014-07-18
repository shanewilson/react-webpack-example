"use strict";

require('./appStyle.styl');

var React = require('react');

var SiteNavigation = require('../navigation/siteNavigation.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <SiteNavigation />
        <article>{this.props.activeRoute}</article>
      </div>
    );
  }
});

module.exports = App;
