import { connect } from 'react-redux';
import { h } from 'react-hyperscript-helpers';

import Increment from 'components/Increment';

import { increment } from 'ducks/counter';

export const IncrementContainer = (props) => (
  h(Increment, {
    ...props,
    handleOnClick: props.increment,
  })
);

export const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(IncrementContainer);
