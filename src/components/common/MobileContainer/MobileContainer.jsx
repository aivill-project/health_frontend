import React from 'react';
import { Container } from './MobileContainer.styles';

const MobileContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MobileContainer; 