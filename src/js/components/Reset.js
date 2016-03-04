import { h } from 'react-hyperscript-helpers';

import Button from 'components/Button';


const Reset = (props) => (
  h(Button, {
    ...props,
    onClick: props.handleOnClick,
  },
  'Reset')
);


export default Reset;
