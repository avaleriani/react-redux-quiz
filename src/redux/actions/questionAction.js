import { ADVANCE_STEP, FETCH_QUESTION_ERROR, FETCH_QUESTION_LOADING, FETCH_QUESTION_SUCCESS } from "../types";

export const questionError = (status) => ({ type: FETCH_QUESTION_ERROR, hasErrored: status });
export const questionLoading = (status) => ({ type: FETCH_QUESTION_LOADING, isLoading: status });
export const questionSuccess = (question) => ({ type: FETCH_QUESTION_SUCCESS, question });
export const advanceStep = (currentStep) => ({ type: ADVANCE_STEP, currentStep });

export const fetchQuestion = (url, currentStep) => {
  return (dispatch) => {
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
      .then((question) => {
        dispatch(advanceStep(currentStep));
        dispatch(questionSuccess(question));
      })
      .catch(() => dispatch(questionError(true)));
  };
};