import React from 'react/addons';
import Router from 'react-router';
const { DefaultRoute, Route, NotFoundRoute } = Router;

import App from './app.jsx';
import Home from './views/pages/home.jsx';
import UserDashboard from './views/pages/dashboard.jsx';
import AdminDashboard from './views/pages/admin/dashboard.jsx';
import Widgets from './views/pages/widgets.jsx';
import Widget from './views/pages/widget.jsx';
import Cart from './views/pages/cart.jsx';
import Login from './views/pages/login.jsx';
import Logout from './views/pages/logout.jsx';
import e404 from './views/pages/404.jsx';

export default (
    <Route path="/" handler={App}>
      <DefaultRoute name="home" handler={Home}/>
      <Route name="widgets" handler={Widgets}/>
      <Route name="widget" path="/widgets/:widgetId" handler={Widget}/>
      <Route name="cart" handler={Cart}/>
      <Route name="logout" handler={Logout}/>
      <Route name="login" handler={Login}/>
      <NotFoundRoute handler={e404}/>
    </Route>
);
