import styled, { css } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @keyframes selectedPulse {
    0% {
      box-shadow: 0 0 0 0 rgba(34, 139, 230, 0.4);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(34, 139, 230, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(34, 139, 230, 0);
    }
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e9ecef;
`;

export const StudentListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
  padding: 16px;
  margin-bottom: 60px;
`;

export const StudentCardWrapper = styled.div`
  position: relative;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-2px);
  }

  ${({ $isSelected }) => $isSelected && css`
    background-color: #e7f5ff;
    border-color: #228be6;
    animation: selectedPulse 2s infinite;
  `}
`;

export const StudentImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-bottom: 12px;
  object-fit: cover;
  background-color: #f1f3f5;
`;

export const StudentInfo = styled.div`
  text-align: center;
  width: 100%;
`;

export const StudentName = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
  color: #343a40;
  transition: color 0.3s ease;

  ${({ $isSelected }) => $isSelected && css`
    color: #228be6;
  `}
`;

export const StudentGrade = styled.div`
  font-size: 14px;
  color: #868e96;
  transition: color 0.3s ease;

  ${({ $isSelected }) => $isSelected && css`
    color: #1971c2;
  `}
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1fr;
  background: #f8f9fa;
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  font-weight: 600;
`;

export const HeaderCell = styled.div`
  text-align: center;
  color: #495057;
`;

export const StudentRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1fr;
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${props => props.$isSelected ? '#e7f5ff' : 'transparent'};
  border-left: ${props => props.$isSelected ? '4px solid #339af0' : '4px solid transparent'};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${props => props.$isSelected ? '#e7f5ff' : '#f8f9fa'};
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`;

export const Cell = styled.div`
  text-align: center;
  color: #495057;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0));
  display: flex;
  justify-content: center;
  z-index: 1000;
  transition: all 0.3s ease;
  opacity: ${props => props.$show ? 1 : 0};
  transform: translateY(${props => props.$show ? 0 : '100%'});
`;

export const NextButtonStyled = styled.button`
  width: 100%;
  max-width: 768px;
  padding: 16px 32px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #228be6 0%, #1971c2 100%);
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(34, 139, 230, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(34, 139, 230, 0.4);
    background: linear-gradient(135deg, #1c7ed6 0%, #1864ab 100%);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(34, 139, 230, 0.3);
  }

  &:disabled {
    background: linear-gradient(135deg, #dee2e6 0%, #adb5bd 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  &:hover .arrow {
    transform: translateX(4px);
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #868e96;
  font-size: 1rem;
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #fa5252;
  font-size: 1rem;
  text-align: center;
  padding: 0 20px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  padding: 0;
  border-radius: 50%;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #868e96;
  z-index: 1;
  
  &:hover {
    background-color: #fa5252;
    border-color: #fa5252;
    color: white;
  }
`