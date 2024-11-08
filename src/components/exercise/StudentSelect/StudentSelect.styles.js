import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 80px;
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
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  margin-bottom: 80px;
`;

export const StudentCardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid ${props => props.$isSelected ? '#339af0' : 'transparent'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const StudentImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
`;

export const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StudentName = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #212529;
  margin-bottom: 4px;
`;

export const StudentGrade = styled.span`
  font-size: 14px;
  color: #868e96;
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