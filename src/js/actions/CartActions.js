import AppDispatcher from '../dispatcher/AppDispatcher'
import CartConstants from '../constants/CartConstants'

export default {

  /**
   * @param {object} widget
   */
  add: function(widget) {
    AppDispatcher.handleViewAction({
      actionType: CartConstants.CART_ADD,
      widget: widget
    });
  },

  /**
   * @param {string} id
   */
  remove: function(id) {
    AppDispatcher.handleViewAction({
      actionType: CartConstants.CART_REMOVE,
      id: id
    });
  },

  /**
   * @param {string} id
   */
  toggle: function(widget) {
    AppDispatcher.handleViewAction({
      actionType: CartConstants.CART_TOGGLE,
      widget: widget
    });
  },

  /**
   * Remove all
   */
  removeAll: function() {
    AppDispatcher.handleViewAction({
      actionType: CartConstants.CART_REMOVE_ALL
    });
  }
}
