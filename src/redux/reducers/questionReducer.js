import {
  FETCH_QUESTION_ERROR,
  FETCH_QUESTION_LOADING,
  FETCH_QUESTION_SUCCESS,
  SAVE_ALREADY_ASKED_QUESTIONS
} from "../types";

export const questionError = (state = false, action) => {
  switch(action.type) {
    case FETCH_QUESTION_ERROR:
      return action.hasErrored;
    default:
      return state;
  }
};

export const questionLoading = (state = false, action) => {
  switch(action.type) {
    case FETCH_QUESTION_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};

export const questionSuccess = (state = null, action) => {
  switch(action.type) {
    case FETCH_QUESTION_SUCCESS:
      return action.question;
    default:
      return state;
  }
};

export const alreadyAskedQuestions = (state = [], action) => {
  switch(action.type) {
    case SAVE_ALREADY_ASKED_QUESTIONS:
      return [...state, action.questionId];
    default:
      return state;
  }
};