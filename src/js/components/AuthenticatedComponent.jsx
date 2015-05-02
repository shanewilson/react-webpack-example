import React from 'react';
import AuthStore from '../stores/AuthStore';

export default (ComposedComponent) => {
  return class AuthenticatedComponent extends React.Component {
    constructor() {
      super();
      this.state = this._getAuthState();
    }

    _getAuthState() {
      return {
        user: AuthStore.getUser()
      };
    }

    componentDidMount() {
      this.changeListener = this._onChange.bind(this);
      AuthStore.addChangeListener(this.changeListener);
    }

    _onChange() {
      this.setState(this._getAuthState());
    }

    componentWillUnmount() {
      AuthStore.removeChangeListener(this.changeListener);
    }

    render() {
      return (
          <ComposedComponent
              {...this.props}
              user={this.state.user}/>
      );
    }
  };
};
