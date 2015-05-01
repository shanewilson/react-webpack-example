import React from 'react/addons';

import {Home} from '../../components/LinkTo.jsx';
import AuthActions from '../../actions/AuthActions';

export default class Logout extends React.Component {
  componentDidMount() {
    AuthActions.logout();
  }

  render () {
    return <p>You are now logged out. Go <Home /></p>;
  }
}
