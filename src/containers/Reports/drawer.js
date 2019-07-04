import React from 'react';
import { Drawer } from '@blueprintjs/core';
import {
  DrawerHeader,
  PlainButton,
  PaddingWrapper,
  FlexRow,
} from '../../components/shared/styled-components';
import { CSVLink } from 'react-csv';
import Loading from '../../components/shared/loading';
import styled from 'styled-components';
import moment from 'moment';

const ReportDrawer = ({
  isOpen,
  handleClose,
  title,
  children,
  headers = [' change the headers '],
  data = [],
  isFetchingReport = false,
  isLoadedReport,
  errorMessage,
  runReport = () =>
    console.log(`the run report function for ${title} is not defined`),
}) => {
  return (
    <Drawer isOpen={isOpen} onClose={handleClose}>
      <DrawerHeader>
        {title}

        <PlainButton
          onClick={runReport}
          disabled={isFetchingReport}
          display="flex"
        >
          RUN REPORT {isFetchingReport && <Loading size={20} />}
        </PlainButton>
      </DrawerHeader>
      <PaddingWrapper>
        <FlexRow align="flex-start">
          <Column width="70%">{children}</Column>
          {isLoadedReport && (
            <Column
              width="35%"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <div>
                <p>
                  There were {errorMessage ? '0' : data.length} result(s)
                  returned.
                </p>
                {!!!data.length || errorMessage ? (
                  <p>Adjust your parameters and re-rerun the report.</p>
                ) : (
                  <CSVLink
                    data={data}
                    filename={`${title}-${moment().format('YYYY-MM-DD')}.csv`}
                    headers={headers}
                  >
                    <PlainButton
                      disabled={!data.length || isFetchingReport}
                      margin={0}
                    >
                      DOWNLOAD REPORT
                    </PlainButton>
                  </CSVLink>
                )}
              </div>
            </Column>
          )}
        </FlexRow>
      </PaddingWrapper>
    </Drawer>
  );
};

const Column = styled.div`
  width: ${props => props.width};
`;

export default ReportDrawer;
