import React from 'react';
import { 
  ItemContainer, 
  ExerciseName,
  DeleteButton
} from './ExerciseItem.styles';

const ExerciseItem = ({ exercise, isSelected, onSelect, onDelete }) => {
  const handleDelete = (e) => {
    e.stopPropagation(); // 상위 요소의 클릭 이벤트 전파 방지
    onDelete(exercise);
  };

  return (
    <ItemContainer 
      $isSelected={isSelected}
      onClick={() => onSelect(exercise)}
    >
      <ExerciseName>{exercise}</ExerciseName>
      <DeleteButton onClick={handleDelete}>×</DeleteButton>
    </ItemContainer>
  );
};

export default ExerciseItem; 