import React, { useState, useEffect } from 'react';
import ArchivedQuestions from './archived-questions';
import ConditionalApprovalComments from './conditional-approval-comments';
import IndividualRequest from './individual-request';
import {
  Container,
  DrawerHeader,
  Table,
  HeaderRow,
  TableData,
} from '../../components/shared/styled-components';
import { InputGroup, NonIdealState } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import colors from '../../utils/colors';

const queryByTitle = (query, title) =>
  title.includes(query.toUpperCase().trim());

const ReportRowsWithMetadata = [
  {
    title: 'ARCHIVED QUESTIONS',
    component: <ArchivedQuestions key="report1" />,
  },
  {
    title: 'CONDITIONAL APPROVAL COMMENTS',
    component: <ConditionalApprovalComments key="report6" />,
  },
  {
    title: 'INDIVIDUAL REQUEST',
    component: <IndividualRequest key="report7" />,
  },
];

const Reports = () => {
  const [query, setQuery] = useState('');
  const [reportRows, setReportRows] = useState(
    ReportRowsWithMetadata.map(row => row.component)
  );
  useEffect(() => {
    setReportRows(
      ReportRowsWithMetadata.filter(row => queryByTitle(query, row.title)).map(
        row => row.component
      )
    );
  }, [query]);
  return (
    <Container>
      <DrawerHeader>
        <span>Reports</span>
        <InputGroup
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          placeholder="Search Reports"
          leftIcon={IconNames.SEARCH}
          large
          style={{ background: colors.lighterGray }}
        />
      </DrawerHeader>
      <Table>
        <thead>
          <HeaderRow>
            <TableData>Report Name</TableData>
            <TableData>Description</TableData>
            <TableData />
          </HeaderRow>
        </thead>
        <tbody>
          {reportRows.length ? (
            reportRows
          ) : (
            <td colSpan={3}>
              <NonIdealState
                icon={IconNames.SEARCH}
                title="No reports found"
                description="Your search did not match any reports"
              />
            </td>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Reports;
