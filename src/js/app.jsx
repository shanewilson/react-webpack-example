import React from 'react/addons';
import { RouteHandler } from 'react-router';
import cookie from 'react-cookie';

import SiteNav from './views/common/SiteNav.jsx';
import AuthActions from './actions/AuthActions';

export default class App extends React.Component {
  componentDidMount() {
    let token = cookie.load('token');
    if (token) {
      AuthActions.login(token);
    } else {
      AuthActions.logout();
    }
  }

  render() {
    return (
      <div>
        <SiteNav />
        <RouteHandler {...this.state} />
      </div>
    );
  }
}
