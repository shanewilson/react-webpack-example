"use strict";

var React = require('react');
var m = require('mori');

var CartTotal = React.createClass({
  getInitialState: function() {
    return {widgets: m.vector()};
  },
  render: function() {
    var total = m.reduce(function(sum, w) {
      return m.get(w, "cost") + sum;
    }, 0, this.props.widgets);

    var selected = m.filter(function(x){
      return m.get(x, "selected");
    }, this.props.widgets);

    var selTotal = m.reduce(function(sum, w) {
      return m.get(w, "cost") + sum;
    }, 0, selected);

    return (
      <div>
        <div>
          Cart contains {m.count(this.props.widgets)} Widgets.
          Total cost is {total}
        </div>
        <div>
          {m.count(selected)} Widgets selected.
          Selected cost is {selTotal}
        </div>
      </div>
    );
  }
});

module.exports = CartTotal;
