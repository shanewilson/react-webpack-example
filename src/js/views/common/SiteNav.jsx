import React from 'react';

import {Home, Widgets, Cart, Logout} from 'components/LinkTo';
import NavBar from 'components/NavBar';
import CartCount from 'components/CartCount';

import AuthenticatedComponent from 'components/AuthenticatedComponent';

class SiteNav extends React.Component {
  render() {
    return (
        <NavBar>
          {this.props.user ? (
              <ul>
                <li><Home /></li>
                <li><Widgets /></li>
                <li><Cart>Cart <CartCount /></Cart></li>
                <li><Logout /></li>
              </ul>
          ) : ''}
        </NavBar >
    );
  }
}

export default AuthenticatedComponent(SiteNav);
