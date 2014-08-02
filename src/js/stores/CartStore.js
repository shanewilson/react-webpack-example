/**
 * CartStore
 */

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CartConstants = require('../constants/CartConstants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _widgets = [];

/**
 * Add a Widget.
 * @param {object} widget
 */
function add(widget) {
  _widgets.push(widget);
}

/**
 * Remove a Widget.
 * @param  {string} id
 */
function remove(id) {
  _widgets = _widgets.filter(function(widget) {
      return widget.id !== id;
  });
}

/**
 * Remove all Widgets.
 */
function removeAll() {
  _widgets = [];
}

var CartStore = merge(EventEmitter.prototype, {
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
   * Get the entire collection of Widgets.
   * @return {array}
   */
  getAll: function() {
    return _widgets;
  },

  /**
   * Get a Widgets by id.
   * @param {string} id
   * @return {object}
   */
  get: function(id) {
    return _widgets.filter(function(widget) {
        return widget.id === id;
    })[ 0 ];

  },
});

// Register to handle all updates
AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case CartConstants.CART_ADD:
      add(action.widget);
      break;

    case CartConstants.CART_REMOVE:
      remove(action.id);
      break;

    case CartConstants.CART_REMOVE_ALL:
      removeAll();
      break;

    default:
      return true;
  }

  // This often goes in each case that should trigger a UI change. This store
  // needs to trigger a UI change after every view action, so we can make the
  // code less repetitive by putting it here.  We need the default case,
  // however, to make sure this only gets called after one of the cases above.
  CartStore.emitChange();

  return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = CartStore;
