import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReportDrawer from './drawer';
import { resetState } from '../../actions/reports';
import {
  TableRow,
  PlainButton,
  TableData,
  NoWrapTD,
} from '../../components/shared/styled-components';

const RowBase = ({ name, description, drawer, resetState, ...rest }) => {
  const [isOpen, toggleOpen] = useState(false);

  const handleClose = () => {
    toggleOpen(false);
    resetState();
  };
  return (
    <>
      <TableRow>
        <NoWrapTD>{name}</NoWrapTD>
        <TableData>{description}</TableData>
        <TableData>
          <PlainButton onClick={toggleOpen}>create report</PlainButton>
        </TableData>
      </TableRow>
      <ReportDrawer
        isOpen={isOpen}
        handleClose={handleClose}
        title={name}
        {...rest}
      >
        {drawer}
      </ReportDrawer>
    </>
  );
};

const Row = connect(
  null,
  { resetState }
)(RowBase);

export default Row;
