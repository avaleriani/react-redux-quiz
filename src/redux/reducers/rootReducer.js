import { combineReducers } from 'redux';
import { questionError, questionSuccess, questionLoading, alreadyAskedQuestions } from './questionReducer';
import { advanceStep, calculateCurrentScore, updateHighestScore } from "./gameReducer";

export default combineReducers({
  askedQuestions: alreadyAskedQuestions,
  question: questionSuccess,
  questionLoading,
  questionError,
  highestScore: updateHighestScore,
  currentScore: calculateCurrentScore,
  step: advanceStep
});