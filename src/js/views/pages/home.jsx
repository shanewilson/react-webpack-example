import React from 'react/addons';

import AdminDashboard from './admin/dashboard.jsx';
import UserDashboard from './dashboard.jsx';

import AuthenticatedComponent from 'components/AuthenticatedComponent.jsx';
import AuthenticatedRoute from '../../components/AuthenticatedRoute.jsx';

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
