import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const SelectedExerciseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SelectedExercise = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: #f0f0f0;
  border-radius: 20px;
  font-size: 14px;
`;

export const RemoveButton = styled.button`
  margin-left: 8px;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0 4px;
  font-size: 12px;
`;

export const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Category = styled.div`
  margin-bottom: 20px;
`;

export const CategoryTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

export const ExerciseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Exercise = styled.div`
  padding: 10px 15px;
  background-color: ${props => props.selected ? '#007AFF' : '#f0f0f0'};
  color: ${props => props.selected ? 'white' : 'black'};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.selected ? '#0056b3' : '#e0e0e0'};
  }
`; 