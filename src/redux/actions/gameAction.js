import { CALCULATE_CURRENT_SCORE, UPDATE_HIGHEST_SCORE, IS_GAME_ENDED } from "../types";

export const calculateCurrentScore = () => ({ type: CALCULATE_CURRENT_SCORE });
export const updateHighestScore = () => ({ type: UPDATE_HIGHEST_SCORE });
export const isEnded = () => ({ type: IS_GAME_ENDED });