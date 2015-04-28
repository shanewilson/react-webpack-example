import React from 'react/addons'

import AuthActions from '../../actions/AuthActions'
import AuthStore from '../../stores/AuthStore'

class Login extends React.Component {
  static willTransitionTo(transition) {
    if (AuthStore.getUser()) {
      transition.redirect('/');
    }
  }

  constructor() {
    super()
    this.login = this.login.bind(this)
    this.adminLogin = this.adminLogin.bind(this)
    this.userLogin = this.userLogin.bind(this)
    this.forward = this.forward.bind(this)
  }

  componentDidMount() {
    AuthStore.addChangeListener(this.forward);
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.forward);
  }

  login(user) {
    AuthActions.login(user)
  }

  forward() {
    var { router } = this.context
    var nextPath = router.getCurrentQuery().nextPath


    if (nextPath) {
      router.replaceWith(nextPath);
    } else {
      router.replaceWith('/');
    }
  }

  adminLogin() {
    this.login(1)
  }

  userLogin() {
    this.login(2)
  }

  render() {
    return (
        <div>
          <article>
            <h1>Login!</h1>
            <section>
              <h2>You must login!</h2>
              <button onClick={this.adminLogin}>I am admin!</button>
              <button onClick={this.userLogin}>I am user!</button>
            </section>
          </article>
        </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.func
};

export default Login