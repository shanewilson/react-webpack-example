import React from 'react/addons';
import Router from 'react-router';
const { DefaultRoute, Route, NotFoundRoute } = Router;

import App from 'app';
import Home from 'views/pages/home';
import UserDashboard from 'views/pages/dashboard';
import AdminDashboard from 'views/pages/admin/dashboard';
import Widgets from 'views/pages/widgets';
import Widget from 'views/pages/widget';
import Cart from 'views/pages/cart';
import Login from 'views/pages/login';
import Logout from 'views/pages/logout';
import e404 from 'views/pages/404';

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
