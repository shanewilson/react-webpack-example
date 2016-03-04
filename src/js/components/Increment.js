import { h } from 'react-hyperscript-helpers';

import Button from 'components/Button';


const Increment = (props) => (
  h(Button, {
    ...props,
    onClick: props.handleOnClick,
  },
  'Plus')
);


export default Increment;
