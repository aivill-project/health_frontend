import styled from 'styled-components';

export const Container = styled.div`
  padding: 76px 20px 90px;
  max-width: 600px;
  margin: 0 auto;
`;

export const CategorySection = styled.div`
  margin-bottom: 24px;
`;

export const CategoryTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid #007AFF;
`;

export const CategoryExerciseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ExerciseItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: ${props => props.$isSelected ? '#E3F2FD' : '#f5f5f5'};
  border: 2px solid ${props => props.$isSelected ? '#007AFF' : 'transparent'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.$isSelected ? '#E3F2FD' : '#e8e8e8'};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }

  ${props => props.$isSelected && `
    box-shadow: 0 2px 4px rgba(0, 122, 255, 0.2);
  `}
`;

export const ExerciseItemText = styled.span`
  font-size: 15px;
  color: #333;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  padding: 0 20px;
  background: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

export const NextButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #007AFF;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  &:disabled {
    cursor: not-allowed;
  }
`;

export const AddExerciseButton = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  
  &:hover {
    background: #f5f5f5;
  }
`;

export const PlusIcon = styled.span`
  margin-right: 4px;
  font-size: 16px;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  
  h3 {
    margin: 0 0 16px;
    font-size: 18px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #007AFF;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const ModalButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  
  &:first-child {
    background: #f5f5f5;
  }
  
  &:last-child {
    background: #007AFF;
    color: white;
  }
`; 