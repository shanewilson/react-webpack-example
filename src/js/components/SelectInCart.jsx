import React from 'react/addons';

import CBToggle from 'components/CBToggle';

export default React.createClass({
  propTypes: {
    widget: React.PropTypes.object.isRequired
  },
  handleChange: function() {
    this.props.handleChange(this.props.widget.get('id'));
  },
  render: function() {
    return (
      <CBToggle widget={this.props.widget} handleChange={this.handleChange}/>
    );
  }
});
