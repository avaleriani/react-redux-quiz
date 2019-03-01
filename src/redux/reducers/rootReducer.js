import { combineReducers } from 'redux';
import { questionError, questionSuccess, questionLoading, alreadyAskedQuestions } from './questionReducer';
import { advanceStep, calculateCurrentScore, updateHighestScore, calculateRoundPoints } from "./gameReducer";

export default combineReducers({
  askedQuestions: alreadyAskedQuestions,
  question: questionSuccess,
  questionLoading,
  questionError,
  highestScore: updateHighestScore,
  currentScore: calculateCurrentScore,
  roundPoints: calculateRoundPoints,
  step: advanceStep
});