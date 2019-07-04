export const fetchAllQuestionTypes = () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: [
        {
          typeID: 1,
          typeName: 'IT Security',
        },
        {
          typeID: 2,
          typeName: 'Medical',
        },
        {
          typeID: 3,
          typeName: 'Security',
        },
      ],
    });
  });
};
