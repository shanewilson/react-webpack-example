"use strict";

var React = require('react');
var PureRenderMixin = require('react').addons.PureRenderMixin;
var Immutable = require('immutable');

var CartStore = require('../../stores/CartStore.js');

var LinkTo = require('../../components/LinkTo.jsx');
var SelectInCart = require('../../components/SelectInCart.jsx');
var CartTotal = require('../../components/CartTotal.jsx');

var SelectAll = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    widgets: React.PropTypes.object.isRequired
  },
  _checkSelected: function(xs) {
    var selected = xs.every(function(w){
      return w.get("selected") === true;
    });
    return { selected: selected };
  },
  getInitialState: function(nextProps) {
    var props = nextProps || this.props;
    return this._checkSelected(props.widgets);
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState(this._checkSelected(nextProps.widgets));
  },
  _onChange: function() {
    this.props.handleChange(this.state.selected);
  },
  render: function() {
    var text = this.state.selected ? "-" : "+";

    return (
      <button type="button" onClick={this._onChange}>{text}</button>
    );
  }
});

var WidgetsTableRow = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <tr>
      <td>
      <SelectInCart
      handleChange={this.props.handleChange}
      index={this.props.index}
      widget={this.props.widget}/>
      </td>
      <td><LinkTo.Widget widgetId={this.props.widget.get("id")} /></td>
      <td>{this.props.widget.get("name")}</td>
      <td>{this.props.widget.get("cost")}</td>
      </tr>
    );
  }
});

var WidgetsTable = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <table>
      <thead>
      <tr>
      <th><SelectAll handleChange={this.props.handleSelectAll} widgets={this.props.widgets}/></th>
      <th>ID</th>
      <th>Name</th>
      <th>Cost</th>
      </tr>
      </thead>
      <tbody>
      {this.props.widgets.map(function(widget) {
        return (
          <WidgetsTableRow
          key={widget.get("id")}
          handleChange={this.props.handleChange}
          widget={widget}/>
        );
      }.bind(this)).toJS()}
      </tbody>
      </table>
    );
  }
});

var Cart = React.createClass({
  mixins: [PureRenderMixin],

  _updateAll: function(selected) {
    var xs = this.state.widgets.map(function(w) {
      var k = w.get(0);
      var v = w.get(1).set("selected", !selected);
      return Immutable.Map(k, v);
    });

    var ws = xs.reduce(function(acc, val) {
      return acc.merge(val);
    },
    Immutable.OrderedMap());

    this.setState({widgets: ws});
  },
  _updateState: function(id) {
    var w = this.state.widgets.get(id);
    w = w.set("selected", !w.get("selected"));
    var ws = this.state.widgets.set(id, w);

    this.setState({widgets: ws});
  },
  getInitialState: function() {
    return {
      widgets: CartStore.getCart()
    };
  },
  /**
  * Event handler for 'change' events coming from the WidgetStore
  */
  _onChange: function() {
    this.setState({
      widgets: CartStore.getCart()
    });
  },
  render: function() {
    var table;

    var widgets = this.state.widgets.valueSeq();
    if (widgets.count()) {
      table = (
        <div>
        <button className="btn">Remove Selected</button>
        <button className="btn">Download Selected</button>
        <button className="btn">Download All</button>
        <WidgetsTable handleSelectAll={this._updateAll} handleChange={this._updateState} widgets={widgets} />
        </div>
      );
    }

    return (
      <div>
      <article>
      <h1>Cart</h1>
      {table}
      <CartTotal widgets={widgets} />
      </article>
      </div>
    );
  }
});

module.exports = Cart;
