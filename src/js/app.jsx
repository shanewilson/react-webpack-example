import React from 'react/addons'
import { RouteHandler } from 'react-router'

import SiteNav from './views/common/SiteNav.jsx'

export default React.createClass({
  render: function() {
    return (
      <div>
        <SiteNav />
        <RouteHandler />
      </div>
    )
  }
})