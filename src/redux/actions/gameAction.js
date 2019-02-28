import { ADVANCE_STEP, CALCULATE_CURRENT_SCORE, RESET_STEP, UPDATE_HIGHEST_SCORE } from "../types";

export const advanceStep = (currentStep) => ({ type: ADVANCE_STEP, currentStep });
export const resetStep = () => ({ type: RESET_STEP });
export const calculateCurrentScore = (step) => ({ type: CALCULATE_CURRENT_SCORE, step });
export const updateHighestScore = () => ({ type: UPDATE_HIGHEST_SCORE });