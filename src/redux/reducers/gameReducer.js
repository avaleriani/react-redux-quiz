import {
  ADVANCE_STEP,
  CALCULATE_CURRENT_SCORE,
  RESET_CURRENT_SCORE,
  RESET_HIGHEST_SCORE,
  RESET_STEP,
  UPDATE_HIGHEST_SCORE
} from "../types";

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
      return state + Math.pow(2, action.step);
    case RESET_CURRENT_SCORE:
      return 0;
    default:
      return state;
  }
};

export const updateHighestScore = (state = 0, action) => {
  switch(action.type) {
    case UPDATE_HIGHEST_SCORE:
      return action.score;
    case RESET_HIGHEST_SCORE:
      return 0;
    default:
      return state;
  }
};