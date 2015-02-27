import EventEmitter from 'events'
import merge from 'react/lib/merge'
import Immutable from 'immutable'

const CHANGE_EVENT = 'change';

const _widgets = Immutable.fromJS({
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

export default WidgtStore = merge(EventEmitter.prototype, {
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
    return _widgets.get("items");
  },

  /**
  * Get a Widgets by index.
  * @param {int} ix
  * @return {object}
  */
  get: function(ix) {
    return this.getAll().get(ix);
  },
  /**
  * Get all Facets
  * @return {object}
  */
  getFacets: function() {
    return _widgets.get("facets");
  },

  /**
  * Get a Facet
  * @param {string} term
  * @return {object}
  */
  getFacet: function(term) {
    return this.getFacets().get(term);
  }
})
