"use strict";

var React = require('react');

var LinkTo = require('../../components/LinkTo.jsx');
var AddToCart = require('../../components/AddToCart.jsx');
var WidgetStore = require('../../stores/WidgetStore.js');
var CartStore = require('../../stores/CartStore.js');
var CartActions = require('../../actions/CartActions.js');

var SelectAll = React.createClass({
  propTypes: {
    widgets: React.PropTypes.array.isRequired
  },
  _checkSelected: function(widgets) {
    var _s = false;
    var cond = widgets.filter(function(w) {
      return w.selected === false;
    });

    if (!cond.length) {
        _s = true;
    }
    
    this.setState({selected: _s});
  },
  getInitialState: function() {
    return {selected: false};
  },
  componentWillReceiveProps: function(nextProps) {
    this._checkSelected(nextProps.widgets);
  },
  componentWillMount: function() {
    this._checkSelected(this.props.widgets);
  },
  _onChange: function() {
    this.props.widgets.map(function(widget) {
      if (this.state.selected) {
        CartActions.remove(widget.id);
      } else if (!widget.selected){
        CartActions.add(widget);
      }
    }.bind(this));

    this.setState({selected: !this.state.selected});
  },
  render: function() {
    return (
      <input type="checkbox"
      checked={this.state.selected}
      onChange={this._onChange} />
    );
  }
});
var WidgetsTableRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td><AddToCart widget={this.props.widget}/></td>
        <td><LinkTo.Widget widgetId={this.props.widget.id} /></td>
        <td>{this.props.widget.name}</td>
        <td>{this.props.widget.cost}</td>
      </tr>
    );
  }
});

var WidgetsTable = React.createClass({
  render: function() {
    return (
      <table>
      <thead>
        <tr>
          <th><SelectAll widgets={this.props.widgets}/></th>
          <th>ID</th>
          <th>Name</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {this.props.widgets.map(function(widget) {
          return <WidgetsTableRow key={widget.id} widget={widget}/>;
        })}
      </tbody>
      </table>
    );
  }
});

function setSelected() {
  var _widgets = WidgetStore.getAll();

  _widgets.map(function(w){
    if (CartStore.get(w.id)) {
      w.selected = true;
    } else {
      w.selected = false;
    }
  });

  return {widgets: _widgets};
}

var Widgets = React.createClass({
  getInitialState: function() {
    return setSelected();
  },

  /**
   * Event handler for 'change' events coming from the WidgetStore
   */
  _onChange: function() {
    this.setState(setSelected());
  },
  componentDidMount: function() {
    WidgetStore.addChangeListener(this._onChange);
    CartStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    WidgetStore.removeChangeListener(this._onChange);
    CartStore.removeChangeListener(this._onChange);
  },
  render: function() {
    return (
      <div>
      <aside>aside</aside>
      <article>
      <h1>Widgets</h1>
      <button className="btn">Add all to cart</button>
      <WidgetsTable widgets={this.state.widgets} />
      </article>
      </div>
    );
  }
});

module.exports = Widgets;
