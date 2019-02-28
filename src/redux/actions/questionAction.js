import {
  FETCH_QUESTION_ERROR,
  FETCH_QUESTION_LOADING,
  FETCH_QUESTION_SUCCESS,
  SAVE_ALREADY_ASKED_QUESTIONS
} from "../types";
import { calculateCurrentScore, advanceStep } from "../actions/gameAction";
import { updateHighestScore } from "./gameAction";

export const questionError = (status) => ({ type: FETCH_QUESTION_ERROR, hasErrored: status });
export const questionLoading = (status) => ({ type: FETCH_QUESTION_LOADING, isLoading: status });
export const questionSuccess = (question) => ({ type: FETCH_QUESTION_SUCCESS, question });
export const alreadyAskedQuestions = (questionId) => ({ type: SAVE_ALREADY_ASKED_QUESTIONS, questionId });

export const fetchQuestion = (url, currentStep) => {
  return (dispatch, getState) => {
    dispatch(questionLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(questionLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((questionArr) => {
        const { askedQuestions, highestScore, currentScore } = getState();
        const question = questionArr[0];

        //Validate if the current id was already asked
        if (askedQuestions[question.id]) {
          fetchQuestion(url, currentStep);
        } else {
          if (currentScore >= highestScore) {
            dispatch(updateHighestScore(currentStep));
          }
          dispatch(alreadyAskedQuestions(question.id));
          dispatch(advanceStep(currentStep));
          dispatch(calculateCurrentScore(currentStep));
          dispatch(questionSuccess(question));
        }
      })
      .catch((error) => {
        dispatch(questionError(true))
        console.error(error);
      });
  };
};