import React from 'react'
const { PureRenderMixin } = React.addons;

import Immutable from 'immutable'

import CartStore from '../../stores/CartStore.js'
import LinkTo from '../../components/LinkTo.jsx'
import SelectInCart from '../../components/SelectInCart.jsx'
import CartTotal from '../../components/CartTotal.jsx'

const SelectAll = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    widgets: React.PropTypes.object.isRequired
  },
  _checkSelected: function (xs) {
    const selected = xs.every((w) => {
      return w.get("selected") === true;
    });
    return {selected: selected}
  },
  getInitialState: function (nextProps) {
    const props = nextProps || this.props;
    return this._checkSelected(props.widgets);
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState(this._checkSelected(nextProps.widgets));
  },
  _onChange: function ()  {
    this.props.handleChange(this.state.selected);
  },
  render: function () {
    const text = this.state.selected ? "-" : "+";

    return (
        <button type="button" onClick={this._onChange}>{text}</button>
    );
  }
});

const WidgetsTableRow = React.createClass({
  mixins: [PureRenderMixin],

  render: function () {
    return (
        <tr>
          <td>
            <SelectInCart
                handleChange={this.props.handleChange}
                index={this.props.index}
                widget={this.props.widget}/>
          </td>
          <td>
            <LinkTo.Widget widgetId={this.props.widget.get("id")} />
          </td>
          <td>{this.props.widget.get("name")}</td>
          <td>{this.props.widget.get("cost")}</td>
        </tr>
    );
  }
});

const WidgetsTable = React.createClass({
  mixins: [PureRenderMixin],

  render: function () {
    return (
        <table>
          <thead>
            <tr>
              <th>
                <SelectAll handleChange={this.props.handleSelectAll} widgets={this.props.widgets}/>
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
      {this.props.widgets.map((widget) => {
        return (
            <WidgetsTableRow
                key={widget.get("id")}
                handleChange={this.props.handleChange}
                widget={widget}/>
        );
      }).toJS()}
          </tbody>
        </table>
    );
  }
});

const Cart = React.createClass({
  mixins: [PureRenderMixin],

  _updateAll: function (selected) {
    const xs = this.state.widgets.map((w) => {
      const k = w.get(0);
      const v = w.get(1).set("selected", !selected);
      return Immutable.Map(k, v);
    });

    const ws = xs.reduce((acc, val) => {
          return acc.merge(val);
        },
        Immutable.OrderedMap());

    this.setState({widgets: ws});
  },
  _updateState: function (id) {
    let w = this.state.widgets.get(id);
    w = w.set("selected", !w.get("selected"));
    const ws = this.state.widgets.set(id, w);

    this.setState({widgets: ws});
  },
  getInitialState: function () {
    return {
      widgets: CartStore.getCart()
    };
  },
  /**
   * Event handler for 'change' events coming from the WidgetStore
   */
  _onChange: function () {
    this.setState({
      widgets: CartStore.getCart()
    });
  },
  render: function () {
    let table;

    const widgets = this.state.widgets.valueSeq();
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

import AuthenticatedRoute from '../../components/AuthenticatedRoute.jsx'
export default AuthenticatedRoute(Cart);
