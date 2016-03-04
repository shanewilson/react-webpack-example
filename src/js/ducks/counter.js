export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const COUNTER_RESET = 'COUNTER_RESET';

export const increment = () => ({ type: COUNTER_INCREMENT });
export const decrement = () => ({ type: COUNTER_DECREMENT });
export const reset = () => ({ type: COUNTER_RESET });

export const INITIAL_STATE = {
  operation: COUNTER_RESET,
  count: 0,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        operation: COUNTER_INCREMENT,
        count: state.count + 1,
      };
    case COUNTER_DECREMENT:
      return {
        operation: COUNTER_DECREMENT,
        count: state.count - 1,
      };
    case COUNTER_RESET:
      return {
        operation: COUNTER_RESET,
        count: 0,
      };
    default:
      return state;
  }
}
