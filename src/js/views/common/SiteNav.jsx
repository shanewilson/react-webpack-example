import React from 'react'

import {Home, Widgets, Cart} from '../../components/LinkTo.jsx'
import NavBar from '../../components/NavBar.jsx'
import CartCount from '../../components/CartCount.jsx'

export default React.createClass({
  render: () => (
      <NavBar>
        <ul>
          <li><Home /></li>
          <li><Widgets /></li>
          <li><CartCount /><Cart /></li>
        </ul>
      </NavBar>
    )
})