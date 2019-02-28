import { combineReducers } from 'redux';
import { questionError, questionSuccess, questionLoading } from './questionReducer';
import { advanceStep, calculateCurrentScore, updateHighestScore } from "./gameReducer";
import timerReducer from './timerReducer';


export default combineReducers({
  questions: questionSuccess,
  questionLoading,
  questionError,
  highestScore: updateHighestScore,
  score: calculateCurrentScore,
  step: advanceStep,
  timer: timerReducer
});