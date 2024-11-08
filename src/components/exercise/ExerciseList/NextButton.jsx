import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { ButtonContainer, NextButtonStyled } from './ExerciseList.styles';

const NextButton = ({ selectedCount, onClick, disabled }) => {
  return (
    <ButtonContainer>
      <NextButtonStyled
        onClick={onClick}
        disabled={disabled}
      >
        다음으로
        <FaArrowRight className="arrow" />
        {selectedCount > 0 && (
          <span className="count">{selectedCount}</span>
        )}
      </NextButtonStyled>
    </ButtonContainer>
  );
};

export default NextButton; 