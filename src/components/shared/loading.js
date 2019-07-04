import React from 'react';
import { Spinner } from '@blueprintjs/core';
import styled from 'styled-components';

const Loading = ({ size }) => (
  <Center>
    <Spinner size={size} />
  </Center>
);

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export default Loading;
