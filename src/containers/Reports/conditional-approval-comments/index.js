import React, { useState } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { FormGroup } from '@blueprintjs/core';
import Row from '../row';
import { DatePicker } from '@blueprintjs/datetime';
import { runArchivedReport } from '../../../actions/reports';
import moment from 'moment';

const dateDirectionOptions = [
  { label: 'Before', value: 'before' },
  { label: 'After', value: 'after' },
];

const ConditionalApprovalCommentsBase = ({
  types,
  isFetching,
  runArchivedReport,
  report,
  isFetchingReport,
  isLoadedReport,
}) => {
  const [selectedDate, setDate] = useState(new Date());
  const [selectedDirection, setDirection] = useState(dateDirectionOptions[0]);

  const handleChange = (selected, setter) => {
    setter(selected);
  };

  return (
    <Row
      name="Conditional Approval Comments"
      description="This is the same report as archived questions and just here to add additional fluff to search on."
      drawer={
        <div style={{ width: '50%' }}>
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

const ConditionalApprovalComments = connect(
  mapStateToProps,
  { runArchivedReport }
)(ConditionalApprovalCommentsBase);

export default ConditionalApprovalComments;
