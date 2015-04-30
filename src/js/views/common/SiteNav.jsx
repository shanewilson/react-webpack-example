import React from 'react'

import {Home, Widgets, Cart, Logout} from '../../components/LinkTo.jsx'
import NavBar from '../../components/NavBar.jsx'
import CartCount from '../../components/CartCount.jsx'

import AuthenticatedComponent from '../../components/AuthenticatedComponent.jsx'

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
          ) : ""}
        </NavBar >
    )
  }
}

export default AuthenticatedComponent(SiteNav)