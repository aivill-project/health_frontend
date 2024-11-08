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
  const [isAddingExercise, setIsAddingExercise] = useState(false);
  const [newExerciseName, setNewExerciseName] = useState('');

  const handleAddClick = () => {
    setIsAddingExercise(true);
  };

  const handleCancel = () => {
    setIsAddingExercise(false);
    setNewExerciseName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newExerciseName.trim()) {
      onAddExercise(category, newExerciseName.trim());
      setNewExerciseName('');
      setIsAddingExercise(false);
    }
  };

  const handleExerciseClick = (e, exercise) => {
    if (!e.target.closest('.delete-button')) {
      onExerciseToggle(exercise);
    }
  };

  return (
    <CategorySection>
      <CategoryHeader>
        <TitleWrapper>
          <CategoryTitle>{category}</CategoryTitle>
          <IconButton 
            size="small"
            onClick={handleAddClick}
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

      {isAddingExercise && (
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
              <CancelButton type="button" onClick={handleCancel}>
                취소
              </CancelButton>
              <CancelButton type="submit" className="submit">
                추가
              </CancelButton>
            </ButtonContainer>
          </form>
        </AddExerciseFormWrapper>
      )}

      <CategoryExerciseList>
        {exercises.map((exercise, index) => (
          <ExerciseItemContainer 
            key={index}
            onClick={(e) => handleExerciseClick(e, exercise)}
            className={selectedExercises.includes(exercise) ? 'selected' : ''}
          >
            <ExerciseItemText>{exercise}</ExerciseItemText>
            <IconButton
              className="delete-button"
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                onRemoveExercise(category, exercise);
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
    </CategorySection>
  );
};

export default ExerciseCategory; 