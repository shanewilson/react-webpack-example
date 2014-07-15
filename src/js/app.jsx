"use strict";

require('styles');

var Link = require('react-nested-router').Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li><Link to="about">About</Link></li>
          <li><Link to="users">Users</Link></li>
          <li><Link to="user" userId="123">User 123</Link></li>
        </ul>
        {this.props.activeRoute}
      </div>
    );
  }
});

var About = React.createClass({
  render: function() {
    return <h2>About</h2>;
  }
});

var Users = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Users</h2>
        {this.props.activeRoute}
      </div>
    );
  }
});

var User = React.createClass({
  render: function() {
    return <div>{this.props.params.userId}</div>;
  }
});

var Route = require('react-nested-router').Route;

React.renderComponent((
  <Route handler={App}>
    <Route name="about" handler={About}/>
    <Route name="users" handler={Users}>
      <Route name="user" path="/user/:userId" handler={User}/>
    </Route>
  </Route>
), document.getElementById("content"));
