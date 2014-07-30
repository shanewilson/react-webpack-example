"use strict";

var React = require('react');

var LinkTo = require('../../components/LinkTo.jsx');

var WidgetsTableRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td><input type="checkbox"
                   name="widget"
                   checked="checked"
                   value={this.props.widget.id} /></td>
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
          <th>Name</th>
          <th>Cost</th>
          <th>ID</th>
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

var Widgets = React.createClass({
  getInitialState: function() {
    return {
      widgets: []
    };
  },
  componentDidMount: function() {
    setTimeout(function(){
      if (this.isMounted()) {
        this.setState({
          widgets: [
          {
            id: "WD1",
            name: "Widget 1",
            cost: 1,
            selected: true
          },
          {
            id: "WD2",
            name: "Widget 2",
            cost: 2,
            selected: false
          },
          {
            id: "WD3",
            name: "Widget 3",
            cost: 1.50,
            selected: false
          },
          {
            id: "WD4",
            name: "Widget 4",
            cost: 2.50,
            selected: false
          }
          ]
        });
      }
    }.bind(this), 0);
  },
  render: function() {
    return (
      <div>
      <aside>aside</aside>
      <article>
      <h1>Widgets</h1>
      <button className="btn">Add selected to cart</button>
      <button className="btn">Add all to cart</button>
      <WidgetsTable widgets={this.state.widgets} />
      </article>
      </div>
    );
  }
});

module.exports = Widgets;
