import { connect } from 'react-redux';
import { h } from 'react-hyperscript-helpers';

import Decrement from 'components/Decrement';

import { decrement } from 'ducks/counter';

export const DecrementContainer = (props) => (
  h(Decrement, {
    ...props,
    handleOnClick: props.decrement,
  })
);

export const mapDispatchToProps = (dispatch) => ({
  decrement: () => dispatch(decrement()),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(DecrementContainer);
