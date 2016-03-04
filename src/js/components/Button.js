import { PropTypes } from 'react';
import { button } from 'react-hyperscript-helpers';

const Button = ({ children, ...rest }) => (
  button(
    { ...rest },
    children
  )
);


Button.propTypes = {
  children: PropTypes.node,
};


export default Button;
