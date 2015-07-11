import React from 'react/addons';

import {Link} from 'react-router';

var LinkTo = React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    target: React.PropTypes.string.isRequired
  },
  render: function() {
    var cx = React.addons.classSet;
    var target = this.props.target;
    return (
      <Link
        className={cx('ns-LinkTo', 'ns-LinkTo--' + this.props.target)}
        to={target}>
        {this.props.children}
      </Link>
    );
  }
});

var Home = React.createClass({
  render: function() {
    var linkName = this.props.children || 'Home';
    return <LinkTo target='home'>{linkName}</LinkTo>;
  }
});

var Login = React.createClass({
  render: function() {
    var linkName = this.props.children || 'Login';
    return <LinkTo target='login'>{linkName}</LinkTo>;
  }
});

var Logout = React.createClass({
  render: function() {
    var linkName = this.props.children || 'Logout';
    return <LinkTo target='logout'>{linkName}</LinkTo>;
  }
});

var Widgets = React.createClass({
  render: function() {
    var linkName = this.props.children || 'Widgets';
    return <LinkTo target='widgets'>{linkName}</LinkTo>;
  }
});

var Widget = React.createClass({
  propTypes: {
    widgetId:  React.PropTypes.string.isRequired
  },
  render: function() {
    var linkName = this.props.children || this.props.widgetId;
    return (
      <Link to='widget' params={{widgetId:this.props.widgetId}}>
        {linkName}
      </Link>
    );
  }
});

var Cart = React.createClass({
  render: function() {
    var linkName = this.props.children || 'View Cart';
    return <LinkTo target='cart'>{linkName}</LinkTo>;
  }
});

var External = React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    href: React.PropTypes.string.isRequired
  },
  render: function() {
    var linkName = this.props.children || this.props.href;
    return <a href={this.props.href}>X::{linkName}</a>;
  }
});

export default {
  LinkTo: LinkTo,
  Home: Home,
  Widgets: Widgets,
  Widget: Widget,
  Cart: Cart,
  External: External,
  Login: Login,
  Logout: Logout
};
