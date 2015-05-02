import React from 'react/addons';

import AuthActions from '../../actions/AuthActions';
import AuthStore from '../../stores/AuthStore';

class Login extends React.Component {
  static willTransitionTo(transition) {
    if (AuthStore.getUser()) {
      transition.redirect('/');
    }
  }

  constructor() {
    super();
    this.login = this.login.bind(this);
    this.forward = this.forward.bind(this);
  }

  componentDidMount() {
    AuthStore.addChangeListener(this.forward);
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.forward);
  }

  login(user:number) {
    AuthActions.login(user);
  }

  forward() {
    var { router } = this.context;
    var nextPath = router.getCurrentQuery().nextPath || '/';
    router.replaceWith(nextPath);
  }

  render() {
    return (
        <div>
          <article>
            <h1>Login!</h1>
            <section>
              <h2>You must login!</h2>
              <button onClick={() => this.login(1)}>I am admin!</button>
              <button onClick={() => this.login(2)}>I am user!</button>
              <button onClick={() => this.login('type_error')}>Type Error</button>
            </section>
          </article>
        </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.func
};

export default Login;
