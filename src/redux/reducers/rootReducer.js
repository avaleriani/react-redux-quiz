import { combineReducers } from 'redux';
import { questionError, questionSuccess, questionLoading } from './questionReducer';
import { advanceStep, calculateCurrentScore, updateHighestScore } from "./gameReducer";

export default combineReducers({
  questions: questionSuccess,
  questionLoading,
  questionError,
  highestScore: updateHighestScore,
  score: calculateCurrentScore,
  step: advanceStep
});