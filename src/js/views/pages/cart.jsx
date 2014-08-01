"use strict";

var React = require('react');

var LinkTo = require('../../components/LinkTo.jsx');
var AddToCart = require('../../components/AddToCart.jsx');
var CartStore = require('../../stores/CartStore.js');

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
          <th><input type="checkbox" name="widget" /></th>
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

var Cart = React.createClass({
  getInitialState: function() {
    return {
      widgets: CartStore.getAll()
    };
  },
  /**
   * Event handler for 'change' events coming from the WidgetStore
   */
  _onChange: function() {
    this.setState({
      widgets: CartStore.getAll()
    });
  },
  componentDidMount: function() {
    CartStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    CartStore.removeChangeListener(this._onChange);
  },
  render: function() {
    return (
      <div>
        <article>
        <h1>Cart</h1>
        <button className="btn">Remove selected from cart</button>
        <button className="btn">Download selected</button>
        <button className="btn">Download all</button>
        <WidgetsTable widgets={this.state.widgets} />
        </article>
      </div>
    );
  }
});

module.exports = Cart;
