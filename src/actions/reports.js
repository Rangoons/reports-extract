import * as api from '../api/reports';

export const runArchivedReport = params => ({
  type: 'RUN_ARCHIVED_REPORT',
  payload: api.runArchivedReport(params),
});

export const runConditionalApprovalCommentsReport = params => ({
  type: 'RUN_CONDITION_APPROVAL_COMMENTS_REPORT',
  payload: api.runConditionalApprovalCommentsReport(params),
});

export const runIndividualRequestReport = params => ({
  type: 'RUN_INDIVIDUAL_REPORT',
  payload: api.runIndividualRequestReport(params),
});

export const resetState = () => ({
  type: 'RESET_REPORT_STATE',
  payload: false,
});
