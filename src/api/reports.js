import { API_URL } from './index';

//not actually used in this demo
const URL = `${API_URL}/reports`;

export const runArchivedReport = params => {
  // return req.get(`${URL}/archived-questions`, { params });

  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          data: {
            result: [
              {
                questionID: 1,
                question: 'What is your favorite color?',
                questionType: 'BCM',
                weight: 1,
                controlID: '30.A',
                originalID: null,
                createDate: '2019-06-28T14:06:47.000Z',
                archivedDate: '2019-07-01T16:53:41.000Z',
                answers: ['Blue', 'Green', 'orange', 'OPT_OUT'],
              },
              {
                questionID: 3,
                question: 'What is your favorite Animal?',
                questionType: 'Device/Software',
                weight: 1,
                controlID: '30.A',
                originalID: null,
                createDate: '2019-06-28T14:06:47.000Z',
                archivedDate: '2019-07-01T16:53:45.000Z',
                answers: ['Cow', 'Dog', 'Raven', 'OPT_OUT'],
              },
            ],
          },
        }),
      2000
    );
  });
};

export const runConditionalApprovalCommentsReport = params => {
  // return req.get(`${URL}/conditional-approvals`, { params });
};

export const runIndividualRequestReport = params => {
  // return req.get(`${URL}/individual-request`, { params });
};
