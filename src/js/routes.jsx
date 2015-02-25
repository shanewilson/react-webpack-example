'use strict';

var React = require('react/addons');
//var PureRenderMixin = React.addons.PureRenderMixin;

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var App = require('./app.jsx');
var Home = require('./views/pages/home.jsx');
var Widgets = require('./views/pages/widgets.jsx');
var Widget = require('./views/pages/widget.jsx');
var Cart = require('./views/pages/cart.jsx');
//var e404 = require('./views/pages/404.jsx');

var routes = (
    <Route path="/index.html" handler={App}>
      <DefaultRoute name="home" handler={Home} />
      <Route name="widgets" handler={Widgets} />
      <Route name="widget" path="/widgets/:widgetId" handler={Widget} />
      <Route name="cart" handler={Cart} />
    </Route>
);

/*

 <Route name="styleguide" handler={Styleguide} />
 <Route name="404" handler={e404} />
 */

module.exports = routes;
