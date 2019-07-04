import * as api from '../api/utils';

export const fetchAllQuestionTypes = () => ({
  type: 'FETCH_ALL_QUESTION_TYPES',
  payload: api.fetchAllQuestionTypes(),
});
