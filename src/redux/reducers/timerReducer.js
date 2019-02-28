import { TIMER_START, TIMER_RESET, TIMER_END, TIMER_DECREMENT } from '../types';

const initialState = {
  value: 30,
  status: 'stopped'
};

const timeReducer = (state = initialState, action) => {
  switch(action.type) {
    case TIMER_START:
      return {
        ...state,
        status: 'started'
      };
    case TIMER_RESET:
      return {
        ...state,
        status: 'stopped',
        value: 30
      };
    case TIMER_END:
      return {
        ...state,
        status: 'ended'
      };
    case TIMER_DECREMENT:
      return {
        ...state,
        value: state.value - 1
      };
    default:
      return state;
  }
};

export default timeReducer;