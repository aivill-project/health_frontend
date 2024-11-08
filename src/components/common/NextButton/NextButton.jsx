import React from 'react';
import {
  ButtonContainer,
  NextButtonStyled
} from './NextButton.styles';

const NextButton = ({ onClick, disabled, count }) => {
  return (
    <ButtonContainer>
      <NextButtonStyled 
        onClick={onClick}
        disabled={disabled}
      >
        다음 {count !== undefined && `(${count})`}
      </NextButtonStyled>
    </ButtonContainer>
  );
};

export default NextButton; 