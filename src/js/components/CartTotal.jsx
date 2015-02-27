import React from 'react/addons'
import Immutable from 'immutable'

export default React.createClass({
  getInitialState: function () {
    return {widgets: Immutable.List()};
  },
  render: function () {
    var total = this.props.widgets.reduce(function (sum, w) {
      return w.get("cost") + sum;
    }, 0);

    var selected = this.props.widgets.filter(function (x) {
      return x.get("selected");
    });

    var selTotal = selected.reduce(function (sum, w) {
      return w.get("cost") + sum;
    }, 0);

    return (
        <div>
          <div>
            Cart contains {this.props.widgets.count()} Widgets.
            Total cost is {total}
          </div>
          <div>
          {selected.count()} Widgets selected.
            Selected cost is {selTotal}
          </div>
        </div>
    );
  }
})