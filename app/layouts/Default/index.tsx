import React from 'react';
import styled from 'styled-components/native';

const LayoutWrapper = styled.View`
  height: 100%;
`;

export const DefaultLayout: React.FC = ({children}) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};
