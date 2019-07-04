import { combineReducers } from 'redux';

const questionTypes = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_QUESTION_TYPES_FULFILLED':
      return action.payload.data;
    case 'FETCH_ALL_QUESTION_TYPES_REJECTED':
      return [];
    default:
      return state;
  }
};

const isFetchingTypes = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_ALL_QUESTION_TYPES_PENDING':
      return true;
    case 'FETCH_ALL_QUESTION_TYPES_REJECTED':
    case 'FETCH_ALL_QUESTION_TYPES_FULFILLED':
      return false;
    default:
      return state;
  }
};

const utils = combineReducers({
  questionTypes,
  isFetchingTypes,
});

export default utils;
