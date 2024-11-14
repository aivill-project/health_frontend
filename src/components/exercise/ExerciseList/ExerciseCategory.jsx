import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import {
  CategorySection,
  CategoryHeader,
  TitleWrapper,
  CategoryTitle,
  CategoryExerciseList,
  ExerciseItemContainer,
  ExerciseItemText,
  AddExerciseFormWrapper,
  ExerciseInput,
  ButtonContainer,
  CancelButton
} from './ExerciseList.styles';

const ExerciseCategory = ({ 
  category, 
  exercises, 
  selectedExercises,
  onExerciseToggle,
  onAddExercise,
  onRemoveExercise,
  onShowAddForm,
  showAddForm,
  onHideAddForm
}) => {
  const [newExerciseName, setNewExerciseName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newExerciseName.trim()) {
      onAddExercise(category, newExerciseName.trim());
      setNewExerciseName('');
    }
  };

  return (
    <CategorySection>
      <CategoryHeader>
        <TitleWrapper>
          <CategoryTitle>{category}</CategoryTitle>
          <IconButton 
            size="small"
            onClick={() => onShowAddForm(category)}
            sx={{
              width: '20px',
              height: '20px',
              padding: '2px',
              color: '#228be6',
              border: '1px solid #e9ecef',
              '&:hover': {
                backgroundColor: '#f8f9fa',
                borderColor: '#228be6',
              }
            }}
          >
            <AddIcon sx={{ fontSize: '14px' }} />
          </IconButton>
        </TitleWrapper>
      </CategoryHeader>

      <CategoryExerciseList>
        {exercises.map((exercise) => (
          <ExerciseItemContainer 
            key={exercise.id}
            selected={selectedExercises.includes(exercise.name)}
            onClick={() => onExerciseToggle(exercise.name)}
          >
            <ExerciseItemText>{exercise.name}</ExerciseItemText>
            <IconButton
              className="delete-button"
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                onRemoveExercise(category, exercise.id);
              }}
              sx={{
                padding: '4px',
                color: '#868e96',
                '&:hover': {
                  color: '#fa5252',
                  background: 'rgba(250, 82, 82, 0.1)',
                }
              }}
            >
              <CloseIcon sx={{ fontSize: '16px' }} />
            </IconButton>
          </ExerciseItemContainer>
        ))}
      </CategoryExerciseList>

      {showAddForm && (
        <AddExerciseFormWrapper>
          <form onSubmit={handleSubmit}>
            <ExerciseInput
              type="text"
              value={newExerciseName}
              onChange={(e) => setNewExerciseName(e.target.value)}
              placeholder="운동명을 입력하세요"
              autoFocus
            />
            <ButtonContainer>
              <CancelButton type="button" onClick={onHideAddForm}>
                취소
              </CancelButton>
              <CancelButton type="submit" className="submit">
                추가
              </CancelButton>
            </ButtonContainer>
          </form>
        </AddExerciseFormWrapper>
      )}
    </CategorySection>
  );
};

export default ExerciseCategory; 