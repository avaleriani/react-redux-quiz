import {
  ADVANCE_STEP, UPDATE_HIGHEST_SCORE,
  CALCULATE_CURRENT_SCORE, CALCULATE_ROUND_POINTS,
  RESET_CURRENT_SCORE, RESET_ROUND_POINTS, RESET_STEP, USER_ANSWER_STATE
} from "../types";
import { calculateScore } from "../../Utils/utils";

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
      return action.step > 0 ? state + calculateScore(action.step - 1) : 0;
    case RESET_CURRENT_SCORE:
      return 0;
    default:
      return state;
  }
};

export const calculateRoundPoints = (state = 0, action) => {
  switch(action.type) {
    case CALCULATE_ROUND_POINTS:
      return calculateScore(action.step);
    case RESET_ROUND_POINTS:
      return 0;
    default:
      return state;
  }
};

export const updateHighestScore = (state = 0, action) => {
  switch(action.type) {
    case UPDATE_HIGHEST_SCORE:
      return action.score;
    default:
      return state;
  }
};

export const userAnswerState = (state = true, action) => {
  switch(action.type) {
    case USER_ANSWER_STATE:
      return action.answerState;
    default:
      return state;
  }
};