import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { ButtonContainer, NextButtonStyled } from './StudentSelect.styles';

const NextButton = ({ onClick, disabled, $show }) => {
  return (
    <ButtonContainer $show={$show}>
      <NextButtonStyled
        onClick={onClick}
        disabled={disabled}
      >
        다음으로
        <FaArrowRight className="arrow" />
      </NextButtonStyled>
    </ButtonContainer>
  );
};

export default NextButton; 