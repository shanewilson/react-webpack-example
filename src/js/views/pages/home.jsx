import React from 'react/addons';

import AdminDashboard from './admin/dashboard';
import UserDashboard from './dashboard';

import AuthenticatedComponent from 'components/AuthenticatedComponent';
import AuthenticatedRoute from 'components/AuthenticatedRoute';

class Home extends React.Component {
  render() {
    return (
        <div>
          <article>
            <h1>Dashboard</h1>
            <section>
              {this.props.user === 1 ?
                  <AdminDashboard /> :
                  <UserDashboard />}
            </section>
          </article>
        </div>
    );
  }
}

export default AuthenticatedRoute(AuthenticatedComponent(Home));
