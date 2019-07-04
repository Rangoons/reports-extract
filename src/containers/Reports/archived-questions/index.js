import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { FormGroup } from '@blueprintjs/core';
import { fetchAllQuestionTypes } from '../../../actions/utils';
import Row from '../row';
import { DatePicker } from '@blueprintjs/datetime';
import { runArchivedReport } from '../../../actions/reports';
import moment from 'moment';

const dateDirectionOptions = [
  { label: 'Before', value: 'before' },
  { label: 'After', value: 'after' },
];

const ArchivedQuestionsBase = ({
  fetchAllQuestionTypes,
  types,
  isFetching,
  runArchivedReport,
  report,
  isFetchingReport,
  isLoadedReport,
}) => {
  const [selectedDate, setDate] = useState(new Date());
  const [selectedType, setType] = useState(null);
  const [selectedDirection, setDirection] = useState(dateDirectionOptions[0]);

  const handleChange = (selected, setter) => {
    setter(selected);
  };

  useEffect(() => {
    fetchAllQuestionTypes();
  }, [fetchAllQuestionTypes]);
  return (
    <Row
      name="Archived Questions"
      description="This test report will successfully generate a report based on a fake api promise and allow you to download a report with two rows"
      drawer={
        <div style={{ width: '50%' }}>
          <FormGroup label="Questionnaire Type">
            <Select
              options={types}
              isLoading={isFetching}
              getOptionLabel={option => option.typeName}
              getOptionValue={option => option.typeID}
              value={selectedType}
              onChange={selected => handleChange(selected, setType)}
            />
          </FormGroup>
          <FormGroup label="Date Before or After">
            <Select
              options={dateDirectionOptions}
              value={selectedDirection}
              onChange={selected => handleChange(selected, setDirection)}
            />
          </FormGroup>
          <FormGroup label="Date">
            <DatePicker
              value={selectedDate}
              onChange={selected => handleChange(selected, setDate)}
            />
          </FormGroup>
        </div>
      }
      runReport={() =>
        runArchivedReport({
          questionnaireType: selectedType ? selectedType.typeID : null,
          direction: selectedDirection.value,
          date: moment(selectedDate).format('YYYY-MM-DD'),
        })
      }
      isFetchingReport={isFetchingReport}
      isLoadedReport={isLoadedReport}
      data={report}
      headers={[
        { label: 'Questionnaire Type', key: 'questionType' },
        { label: 'Question', key: 'question' },
        { label: 'Date Archived', key: 'archivedDate' },
        { label: 'Weight', key: 'weight' },
        { label: 'Control ID', key: 'controlID' },
        { label: 'Date Created', key: 'createDate' },
        { label: 'Answers', key: 'answers' },
      ]}
    />
  );
};

const mapStateToProps = state => ({
  types: state.utils.questionTypes,
  isFetching: state.utils.isFetchingTypes,
  report: state.reports.archivedQuestions,
  isFetchingReport: state.reports.isFetching,
  isLoadedReport: state.reports.isLoaded,
});

const ArchivedQuestions = connect(
  mapStateToProps,
  { fetchAllQuestionTypes, runArchivedReport }
)(ArchivedQuestionsBase);

export default ArchivedQuestions;
