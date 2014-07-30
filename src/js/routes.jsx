'use strict';

var React = require('react/addons');
var PureRenderMixin = React.addons.PureRenderMixin;

var Route = require('react-router').Route;
var Routes = require('react-router').Routes;

var Home = require('./views/pages/home.jsx');
var Widgets = require('./views/pages/widgets.jsx');
var Widget = require('./views/pages/widget.jsx');
var Cart = require('./views/pages/cart.jsx');
var Styleguide = require('./views/pages/styleguide.jsx');
var e404 = require('./views/pages/404.jsx');

var AppRoutes = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <Routes>
        <Route handler={this.props.app}>
          <Route name="home" path="/" handler={Home} />
          <Route name="widgets" path="/widgets" handler={Widgets} />
          <Route name="widget" path="/widgets/:widgetId" handler={Widget} />
          <Route name="cart" path="/cart" handler={Cart} />
          <Route name="styleguide" path="/styleguide" handler={Styleguide} />
          <Route name="404" handler={e404} />
        </Route>
      </Routes>
    );
  }
});

module.exports = AppRoutes;
