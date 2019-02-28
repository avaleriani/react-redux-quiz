import { ADVANCE_STEP, CALCULATE_CURRENT_SCORE, RESET_STEP, UPDATE_HIGHEST_SCORE } from "../types";

export const advanceStep = (state = 0, action) => {
  switch(action.type) {
    case ADVANCE_STEP:
      return state + 1;
    case RESET_STEP:
      return 0;
    default:
      return state;
  }
};

export const calculateCurrentScore = (state = 0, action) => {
  switch(action.type) {
    case CALCULATE_CURRENT_SCORE:
      return action.step;
    default:
      return state;
  }
};

export const updateHighestScore = (state = [], action) => {
  switch(action.type) {
    case UPDATE_HIGHEST_SCORE:
      return action.question;
    default:
      return state;
  }
};