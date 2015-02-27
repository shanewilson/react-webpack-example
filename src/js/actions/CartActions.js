import AppDispatcher from '../dispatcher/AppDispatcher'
import CartConstants from '../constants/CartConstants'

export default {

  /**
   * @param {object} widget
   */
  add: function(widget) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_ADD,
      widget: widget
    });
  },

  /**
   * @param {string} id
   */
  remove: function(id) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_REMOVE,
      id: id
    });
  },

  /**
   * @param {string} widget
   */
  toggle: function(widget) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_TOGGLE,
      widget: widget
    });
  },

  /**
   * Remove all
   */
  removeAll: function() {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_REMOVE_ALL
    });
  }
}
