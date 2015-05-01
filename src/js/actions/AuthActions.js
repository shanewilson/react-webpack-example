import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';

export default {

  login: function(token) {
    console.log('AuthActions login');
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGIN,
      token: token
    });
  },

  logout: function() {
    console.log('AuthActions logout');
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGOUT
    });
  }
};
