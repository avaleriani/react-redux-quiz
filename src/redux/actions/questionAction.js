import { FETCH_QUESTION_ERROR, FETCH_QUESTION_LOADING, FETCH_QUESTION_SUCCESS } from "../types";

export function questionError(status) {
  return {
    type: FETCH_QUESTION_ERROR,
    hasErrored: status
  };
}

export function questionLoading(status) {
  return {
    type: FETCH_QUESTION_LOADING,
    isLoading: status
  };
}

export function questionSuccess(question) {
  return {
    type: FETCH_QUESTION_SUCCESS,
    question
  };
}


export const fetchQuestion = (url) => {
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
      .then((question) => dispatch(questionSuccess(question)))
      .catch(() => dispatch(questionError(true)));
  };
};