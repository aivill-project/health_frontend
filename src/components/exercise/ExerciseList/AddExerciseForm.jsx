import React from 'react';
import {
  AddExerciseFormWrapper,
  ExerciseInput,
  AddExerciseButton,
  CancelButton
} from './ExerciseList.styles';

const AddExerciseForm = ({ 
  newExercise, 
  onNewExerciseChange, 
  onAddExercise, 
  onCancel 
}) => {
  return (
    <AddExerciseFormWrapper>
      <ExerciseInput
        value={newExercise}
        onChange={(e) => onNewExerciseChange(e.target.value)}
        placeholder="새로운 운동 이름 입력"
      />
      <AddExerciseButton onClick={onAddExercise}>
        추가
      </AddExerciseButton>
      <CancelButton onClick={onCancel}>
        취소
      </CancelButton>
    </AddExerciseFormWrapper>
  );
};

export default AddExerciseForm; 