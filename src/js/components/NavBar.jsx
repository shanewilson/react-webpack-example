require('./NavBar.css');

import React from 'react/addons';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]).isRequired
  },
  render: function() {
    return (
      <nav className='Navbar'>{this.props.children}</nav>
    );
  }
});
