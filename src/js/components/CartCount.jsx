import React from 'react/addons'

import CartStore from "../stores/CartStore.js"

function cartItems(){
  return {
    widgets: CartStore.getCart()
  };
}

export default React.createClass({
  getInitialState: function() {
    return cartItems();
  },
  /**
   * Event handler for 'change' events coming from the WidgetStore
   */
  _onChange: function() {
    this.setState(cartItems());
  },
  componentDidMount: function() {
    CartStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    CartStore.removeChangeListener(this._onChange);
  },
  render: function() {
    return <span className="ns-CartCount">[{this.state.widgets.count()}]</span>;
  }
})