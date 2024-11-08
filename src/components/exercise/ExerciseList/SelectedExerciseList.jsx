import React from 'react';
import {
  SelectedExercises,
  SubTitle,
  CategoryExerciseList,
  SelectedExercise,
  ExerciseItemText,
  RemoveButton
} from './ExerciseList.styles';

const SelectedExerciseList = ({ selectedExercises, onRemoveExercise }) => {
  return (
    <SelectedExercises>
      <SubTitle>선택된 운동 ({selectedExercises.length})</SubTitle>
      <CategoryExerciseList>
        {selectedExercises.map((exercise) => (
          <SelectedExercise key={exercise}>
            <ExerciseItemText>{exercise}</ExerciseItemText>
            <RemoveButton onClick={() => onRemoveExercise(exercise)}>
              ×
            </RemoveButton>
          </SelectedExercise>
        ))}
      </CategoryExerciseList>
    </SelectedExercises>
  );
};

export default SelectedExerciseList; 