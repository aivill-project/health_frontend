import React from 'react';
import { ButtonWrapper } from './Button.styles';

const Button = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button; 