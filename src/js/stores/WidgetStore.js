/**
* WidgetStore
*/

"use strict";

var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');
var m = require('mori');

var CHANGE_EVENT = 'change';

var _widgets = m.js_to_clj({
  facets: {
    "cost": {
      "type": "term",
      "values": [
      {
        "value": 1,
        "count": 1
      },
      {
        "value": 1.5,
        "count": 2
      },
      {
        "value": 2,
        "count": 2
      }
      ]
    }
  },
  items: [
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
  ]
});

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
    return m.get(_widgets, "items");
  },

  /**
  * Get a Widgets by index.
  * @param {int} ix
  * @return {object}
  */
  gget: function(ix) {
    return m.get(this.getAll(), ix);
  },
  /**
  * Get all Facets
  * @return {object}
  */
  getFacets: function() {
    return m.get(_widgets, "facets");
  },

  /**
  * Get a Facet
  * @param {string} term
  * @return {object}
  */
  getFacet: function(term) {
    return m.get(this.getFacets(), term);
  }
});

module.exports = WidgetStore;
