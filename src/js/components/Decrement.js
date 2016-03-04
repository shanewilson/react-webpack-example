import { h } from 'react-hyperscript-helpers';

import Button from 'components/Button';


const Decrement = (props) => (
  h(Button, {
    ...props,
    onClick: props.handleOnClick,
  },
  'Minus')
);


export default Decrement;
