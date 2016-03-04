import React from 'react/addons';

import CartActions from 'actions/CartActions';
import CBToggle from 'components/CBToggle';

export default React.createClass({
  propTypes: {
    widget: React.PropTypes.object.isRequired
  },
  handleChange: function() {
    CartActions.toggle(this.props.widget);
  },
  render: function() {
    return (
      <CBToggle widget={this.props.widget} handleChange={this.handleChange}/>
    );
  }
});
