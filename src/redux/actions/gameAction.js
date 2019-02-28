import { CALCULATE_CURRENT_SCORE, UPDATE_HIGHEST_SCORE } from "../types";

export const calculateCurrentScore = () => ({ type: CALCULATE_CURRENT_SCORE });
export const updateHighestScore = () => ({ type: UPDATE_HIGHEST_SCORE });