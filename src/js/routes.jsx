import React from 'react/addons'
import Router from 'react-router'

import App from './app.jsx'
import Home from './views/pages/home.jsx'
import Widgets from './views/pages/widgets.jsx'
import Widget from './views/pages/widget.jsx'
import Cart from './views/pages/cart.jsx'

const { DefaultRoute, Route } = Router;

export default (
    <Route path="/" handler={App}>
      <DefaultRoute name="home" handler={Home} />
      <Route name="widgets" handler={Widgets} />
      <Route name="widget" path="/widgets/:widgetId" handler={Widget} />
      <Route name="cart" handler={Cart} />
    </Route>
)