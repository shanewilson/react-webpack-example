import EventEmitter from 'events';
import cookie from 'react-cookie';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';
import AuthActions from '../actions/AuthActions';

const CHANGE_EVENT = 'change';

var _user = null;

const AuthStore = Object.assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  /**
   * Get the user
   * @return {number}
   */
  getUser: function() {
    return _user;
  }
});


function login(token) {
  cookie.save('token', token);
  _user = token;
}

function logout() {
  _user = null;
  cookie.remove('token');
}

// Register to handle all updates
AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case AuthConstants.LOGIN:
      login(action.token);
      break;

    case AuthConstants.LOGOUT:
      logout();
      break;

    default:
      return true;
  }

  // This often goes in each case that should trigger a UI change. This store
  // needs to trigger a UI change after every view action, so we can make the
  // code less repetitive by putting it here.  We need the default case,
  // however, to make sure this only gets called after one of the cases above.
  AuthStore.emitChange();

  return true; // No errors.  Needed by promise in Dispatcher.
});

export default AuthStore;
