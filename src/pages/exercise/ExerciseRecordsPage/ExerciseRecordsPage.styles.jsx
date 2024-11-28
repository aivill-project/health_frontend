import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const StudentListSection = styled.div`
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const StudentList = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 8px;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 4px;
  }
`;

export const StudentItem = styled.div`
  flex: 0 0 auto;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: ${props => props.$isSelected ? '#1976d2' : '#f5f5f5'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.$isSelected ? '#1565c0' : '#eeeeee'};
  }
`;

export const StudentInfo = styled.div`
  text-align: center;
`;

export const StudentName = styled.div`
  color: ${props => props.$isSelected ? 'white' : '#333'};
  font-weight: ${props => props.$isSelected ? '600' : '500'};
  font-size: 0.9rem;
`;

export const StudentGrade = styled.div`
  color: ${props => props.$isSelected ? 'rgba(255,255,255,0.8)' : '#666'};
  font-size: 0.8rem;
  margin-top: 4px;
`;

export const RecordsSection = styled.div`
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  flex: 1;

  h2 {
    margin: 0 0 16px 0;
    font-size: 1.1rem;
    color: #333;
  }
`; 