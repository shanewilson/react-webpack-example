require('./styles/styles.styl');

import React from "react/addons"
import Router from 'react-router'
import routes from './js/routes.jsx'

document.addEventListener("DOMContentLoaded", (event) => {
  Router.run(routes, Router.HistoryLocation, (Handler, state) => {
    React.render(<Handler/>, document.getElementById("app"))
  });
});