"use strict";

var React = require('react');

var LinkTo = require('../../components/LinkTo.jsx');

var CartsTable = React.createClass({
  render: function() {
    return (
      <table>
        <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Cost</th>
          <th>ID</th>
        </tr>
        </thead>
        <tbody>
           {this.props.widgets.map(function(widget) {
             return (
               <tr key={widget.id}>
                 <td><input type="checkbox" name="cart" value={widget.id} /></td>
                 <td><LinkTo.Widget widgetId={widget.id} /></td>
                 <td>{widget.name}</td>
                 <td>{widget.cost}</td>
               </tr>
             );
           })}
        </tbody>
      </table>
    );
  }
});

var Carts = React.createClass({
   getInitialState: function() {
    return {
        widgets: []
    };
  },
  render: function() {
    return (
      <div>
        <aside>aside</aside>
        <article>
          <h1>Carts</h1>
          <CartsTable widgets={this.state.widgets} />
        </article>
      </div>
    );
  }
});

module.exports = Carts;
