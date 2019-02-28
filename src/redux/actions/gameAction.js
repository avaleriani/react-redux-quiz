import { ADVANCE_STEP, CALCULATE_CURRENT_SCORE, UPDATE_HIGHEST_SCORE } from "../types";

export const advanceStep = () => ({ type: ADVANCE_STEP });
export const calculateCurrentScore = () => ({ type: CALCULATE_CURRENT_SCORE });
export const updateHighestScore = () => ({ type: UPDATE_HIGHEST_SCORE });