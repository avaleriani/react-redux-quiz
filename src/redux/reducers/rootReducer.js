import { combineReducers } from 'redux';
import { questionError, questionSuccess, questionLoading } from './questionReducer';
import { advanceStep, calculateCurrentScore, updateHighestScore } from "./gameReducer";
import timerReducer from './timerReducer';


export default combineReducers({
  questionSuccess,
  questionLoading,
  questionError,
  updateHighestScore,
  calculateCurrentScore,
  advanceStep,
  timer: timerReducer
});