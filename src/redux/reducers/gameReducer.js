import { ADVANCE_STEP, CALCULATE_CURRENT_SCORE, UPDATE_HIGHEST_SCORE } from "../types";

export const advanceStep = (state = false, action) => {
  switch(action.type) {
    case ADVANCE_STEP:
      return action.step;
    default:
      return state;
  }
};

export const calculateCurrentScore = (state = false, action) => {
  switch(action.type) {
    case CALCULATE_CURRENT_SCORE:
      return action.isLoading;
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