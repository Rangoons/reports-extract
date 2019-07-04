import styled from 'styled-components';
import colors from '../../utils/colors';

/* Commonly used styled components */

export const Container = styled.div`
  width: ${props => props.width || '90%'};
  min-height: 16rem;
  margin: 0 auto 2rem;
  border-radius: 5px;
  background: ${props => props.background || '#fff'};
  padding-bottom: ${props => props.paddingBottom || '0'};
  -webkit-box-shadow: 0px 0px 20px 3px rgba(190, 190, 190, 1);
  -moz-box-shadow: 0px 0px 20px 3px rgba(190, 190, 190, 1);
  box-shadow: 0px 0px 20px 3px rgba(190, 190, 190, 1);
`;

export const DrawerHeader = styled.div`
  width: 100%;
  border-left: 5px solid ${colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  font-size: 1.75rem;
  font-weight: 300;
  background-color: ${colors.white};
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'space-between'};
  font-size: ${props => props.fontSize || 'inherit'};
  width: ${props => props.width || '100%'};
  align-content: ${props => props.align || 'center'};
  align-items: ${props => props.align || 'center'};
  margin: ${props => props.margin || '0.5rem 0'};
  padding: ${props => props.padding || '0'};
  flex-wrap: ${props => props.flexWrap || 'inherit'};
  background-color: ${props => props.background || 'inherit'};
`;

export const PaddingWrapper = styled.div`
  padding: ${props => props.padding || '1rem'};
  background: ${props => props.background || 'inherit'};
`;

export const PlainButton = styled.button`
  text-transform: uppercase;
  padding: 0.75rem 1rem;
  margin: ${props => props.margin || '0 0.5rem 0 1rem'};
  text-align: center;
  border: none;
  width: ${props => props.width || 'fit-content'};
  display: ${props => props.display || 'inline-block'};
  align-items: center;
  cursor: pointer;
  outline: none;
  letter-spacing: 1px;
  background: ${props => props.background || colors.primary};
  color: ${props => props.color || colors.white};
  font-size: 0.875rem;
  white-space: nowrap;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 5px;
  &:hover {
    background: ${colors.secondary};
  }
  &.warning {
    background: ${colors.red};
  }
  &.warning:hover {
    background: ${colors.darkRed};
  }
  &:disabled {
    background: ${colors.lightGray};
    cursor: not-allowed;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  text-align: left;
  transition: all 0.3s ease;
  color: ${colors.lightGray};
  margin-bottom: 0.5rem;
  font-weight: 400;
  padding: 1rem;
`;

export const HeaderRow = styled.tr`
  background: ${colors.whiteGray};
  border-top: 1px solid ${colors.lightestGray};
  border-bottom: 1px solid ${colors.lightestGray};
  white-space: ${props => props.whiteSpace || 'unset'};
`;

export const TableRow = styled.tr`
  border-top: 1px solid ${colors.lightestGray};
  background: ${props => props.background || '#fff'};
  &:last-child {
    border-bottom: none;
  }
  width: 100%;
`;

export const TableData = styled.td`
  font-weight: 400;
  padding: 1rem;
  color: ${props => props.color || colors.gray};
  &:last-child {
    word-break: normal;
  }
`;

export const NoWrapTD = styled(TableData)`
  white-space: nowrap;
`;

export const TableDataIcons = styled(TableData)`
  text-align: right;
  width: 60px;
`;
