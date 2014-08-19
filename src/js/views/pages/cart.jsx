"use strict";

var React = require('react');
var PureRenderMixin = require('react').addons.PureRenderMixin;
var m = require('mori');

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
    var selected = m.every(function(w){
      return m.get(w, "selected") === true;
    }, xs);
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
      <td><LinkTo.Widget widgetId={m.get(this.props.widget, "id")} /></td>
      <td>{m.get(this.props.widget, "name")}</td>
      <td>{m.get(this.props.widget, "cost")}</td>
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
      {(m.into_array(this.props.widgets)).map(function(widget) {
        return (
          <WidgetsTableRow
          key={m.get(widget, "id")}
          handleChange={this.props.handleChange}
          widget={widget}/>
        );
      }.bind(this))}
      </tbody>
      </table>
    );
  }
});

var Cart = React.createClass({
  mixins: [PureRenderMixin],

  _updateAll: function(selected) {
    var ws = m.reduce(function(acc, val) {
      return m.merge(acc, val);
    },
    m.hash_map(),
    m.map(function(w) {
      var k = m.get(w, 0);
      var v = m.assoc(m.get(w, 1), "selected", !selected);
      return m.hash_map(k, v);
    }, this.state.widgets));

    this.setState({widgets: ws});
  },
  _updateState: function(id) {
    var w = m.get(this.state.widgets, id);
    w = m.assoc(w, "selected", !m.get(w, "selected"));
    var ws = m.assoc(this.state.widgets, id, w);

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
    var widgets = m.vals(this.state.widgets);
    if (m.count(widgets)) {
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
