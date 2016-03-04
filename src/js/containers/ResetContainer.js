import { connect } from 'react-redux';
import { h } from 'react-hyperscript-helpers';

import Reset from 'components/Reset';

import { reset } from 'ducks/counter';

export const ResetContainer = (props) => (
  h(Reset, {
    ...props,
    handleOnClick: props.reset,
  })
);

export const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(reset()),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(ResetContainer);
