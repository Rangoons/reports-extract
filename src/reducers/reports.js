import { combineReducers } from 'redux';

const archivedQuestions = (state = [], action) => {
  switch (action.type) {
    case 'RUN_ARCHIVED_REPORT_FULFILLED':
      return action.payload.data.result;
    case 'RUN_ARCHIVED_REPORT_REJECTED':
      return [];
    default:
      return state;
  }
};

const conditionalApprovalComments = (state = [], action) => {
  switch (action.type) {
    case 'RUN_CONDITION_APPROVAL_COMMENTS_REPORT_FULFILLED':
      return action.payload.data.conditionalAssessmentReport;
    case 'RUN_CONDITION_APPROVAL_COMMENTS_REPORT_REJECTED':
      return [];
    default:
      return state;
  }
};
const individualRequest = (state = [], action) => {
  switch (action.type) {
    case 'RUN_INDIVIDUAL_REPORT_FULFILLED':
      return action.payload.data;
    case 'RUN_INDIVIDUAL_REPORT_REJECTED':
      return {
        vendorRequestResult: [],
        questionnaireResult: [],
        scoreResult: [],
      };
    default:
      return state;
  }
};

/* We should only ever be fetching one report at a time, so we can safely reuse the same isFetching boolean*/

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'RUN_ARCHIVED_REPORT_PENDING':
      return true;
    case 'RUN_ARCHIVED_REPORT_REJECTED':
    case 'RUN_ARCHIVED_REPORT_FULFILLED':
      return false;
    default:
      return state;
  }
};

const isLoaded = (state = false, action) => {
  switch (action.type) {
    case 'RUN_ARCHIVED_REPORT_PENDING':
    case 'RESET_REPORT_STATE':
      return false;
    case 'RUN_ARCHIVED_REPORT_REJECTED':
    case 'RUN_ARCHIVED_REPORT_FULFILLED':
      return true;
    default:
      return state;
  }
};

const errorMessage = (state = false, action) => {
  switch (action.type) {
    case 'RUN_ARCHIVED_REPORT_PENDING':
    case 'RESET_REPORT_STATE':
      return false;
    case 'RUN_ARCHIVED_REPORT_REJECTED':
      return true;
    default:
      return state;
  }
};

const reports = combineReducers({
  archivedQuestions,
  conditionalApprovalComments,
  individualRequest,
  isFetching,
  isLoaded,
  errorMessage,
});

export default reports;
