import { PropTypes } from 'react';
import { div } from 'react-hyperscript-helpers';

const Counter = ({ count, operation, ...rest }) => (
  div(
    { ...rest },
    `${operation} Count: ${count}`
  )
);


Counter.propTypes = {
  children: PropTypes.node,
};


export default Counter;
