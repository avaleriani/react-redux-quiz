import {
  ADVANCE_STEP,
  CALCULATE_CURRENT_SCORE,
  CALCULATE_ROUND_POINTS,
  RESET_CURRENT_SCORE,
  RESET_ROUND_POINTS,
  RESET_STEP,
  UPDATE_HIGHEST_SCORE
} from "../types";

/**
 * @param { number} currentStep
 * @return Object
 */
export const advanceStep = (currentStep) => ({ type: ADVANCE_STEP, currentStep });
export const resetStep = () => ({ type: RESET_STEP });
/**
 * @param { number} step
 * @return Object
 */
export const calculateCurrentScore = (step) => ({ type: CALCULATE_CURRENT_SCORE, step });
/**
 * @param { number} step
 * @return Object
 */
export const calculateRoundPoints = (step) => ({ type: CALCULATE_ROUND_POINTS, step });
export const resetRoundPoints = () => ({ type: RESET_ROUND_POINTS });
export const resetCurrentScore = () => ({ type: RESET_CURRENT_SCORE });
/**
 * @param { number} score
 * @return Object
 */
export const updateHighestScore = (score) => ({ type: UPDATE_HIGHEST_SCORE, score });

/**
 * @type {function} fetchQuestion
 */
export const resetGame = () => {
  return (dispatch) => {
    dispatch(resetStep());
    dispatch(resetCurrentScore());
    dispatch(resetRoundPoints());
  };
};