import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export default Layout; 