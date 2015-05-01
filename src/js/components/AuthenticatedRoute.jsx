import React from 'react';
import AuthStore from '../stores/AuthStore';

import AuthenticatedComponent from './AuthenticatedComponent.jsx';

export default (ComposedComponent) => {
  return class AuthenticatedRoute extends React.Component {
    static willTransitionTo(transition) {
      console.log('AuthenticatedRoute: ', AuthStore.getUser());
      if (!AuthStore.getUser()) {
        transition.redirect('/login', {}, {'nextPath' : transition.path});
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
};
