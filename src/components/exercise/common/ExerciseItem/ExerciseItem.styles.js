import styled from 'styled-components';

export const ItemContainer = styled.div`
  background: white;
  padding: 12px 16px;
  border-radius: 8px;
  border: 2px solid ${props => props.$isSelected ? '#007AFF' : '#eee'};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const ExerciseName = styled.span`
  font-size: 14px;
  color: #333;
  flex: 1;
`;

export const DeleteButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  color: #666;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-left: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #ffebee;
    color: #f44336;
  }
`;