import {
  ADVANCE_STEP,
  CALCULATE_CURRENT_SCORE,
  RESET_CURRENT_SCORE,
  RESET_HIGHEST_SCORE,
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
export const resetCurrentScore = () => ({ type: RESET_CURRENT_SCORE });
export const updateHighestScore = (score) => ({ type: UPDATE_HIGHEST_SCORE, score });
export const resetHighestScore = () => ({ type: RESET_HIGHEST_SCORE });

export const resetGame = () => {
  return (dispatch) => {
    dispatch(resetStep());
    dispatch(resetCurrentScore());
    dispatch(resetHighestScore());
  };
};