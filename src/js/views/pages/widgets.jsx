"use strict";

var React = require('react');
var m = require('mori');
var PureRenderMixin = require('react').addons.PureRenderMixin;

var WidgetStore = require('../../stores/WidgetStore.js');
var CartStore = require('../../stores/CartStore.js');
var CartActions = require('../../actions/CartActions.js');

var LinkTo = require('../../components/LinkTo.jsx');
var AddToCart = require('../../components/AddToCart.jsx');

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
    m.each(this.props.widgets, function(widget) {
      if (this.state.selected) {
        CartActions.remove(m.get(widget, "id"));
      } else if (!m.get(widget, "selected")){
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
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <tr>
      <td><AddToCart widget={this.props.widget}/></td>
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
      <th><SelectAll widgets={this.props.widgets}/></th>
      <th>ID</th>
      <th>Name</th>
      <th>Cost</th>
      </tr>
      </thead>
      <tbody>
      {(m.into_array(this.props.widgets)).map(function(widget) {
        return (<WidgetsTableRow key={m.get(widget, "id")} widget={widget}/>);
      })}
      </tbody>
      </table>
    );
  }
});

var Facet = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    var xs = m.get(this.props.facet, "values");
    return (
      <ul>
      {(m.into_array(xs)).map(function(term) {
        var v = m.get(term, "value");
        var c = m.get(term, "count");
        return (<li key={v}>{v} - {c}</li>);
      })}
      </ul>
    );
  }
});

var WidgetsFacets = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <ul>
      <Facet facet={m.get(this.props.facets, "cost")}/>
      </ul>
    );
  }
});

var Widgets = React.createClass({
  mixins: [PureRenderMixin],

  _setSelectedWidgets: function(widgets) {
    var ids = CartStore.getCart();

    return m.map(function(w) {
      if (m.has_key(ids, m.get(w, "id"))){
        w = m.assoc(w, "selected", true);
      }
      return w;
    }, widgets);
  },
  _updateState: function() {
    return {
      widgets: {
        items: this._setSelectedWidgets(WidgetStore.getAll()),
        facets: WidgetStore.getFacets()
      }
    };
  },
  getInitialState: function() {
    return this._updateState();
  },

  /**
  * Event handler for 'change' events coming from the WidgetStore
  */
  _onChange: function() {
    return this.setState(this._updateState());
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
      <aside>
      <WidgetsFacets facets={this.state.widgets.facets} />
      </aside>
      <article>
      <h1>Widgets</h1>
      <WidgetsTable widgets={this.state.widgets.items} />
      </article>
      </div>
    );
  }
});

module.exports = Widgets;
