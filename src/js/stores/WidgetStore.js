/**
 * WidgetStore
 */

"use strict";

var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _widgets = [
  {
    id: "WD1",
    name: "Widget 1",
    cost: 1
  },
  {
    id: "WD2",
    name: "Widget 2",
    cost: 2
  },
  {
    id: "WD3",
    name: "Widget 3",
    cost: 1.50
  },
  {
    id: "WD4",
    name: "Widget 4",
    cost: 2.50
  }
];

var WidgetStore = merge(EventEmitter.prototype, {
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

module.exports = WidgetStore;
