import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  min-height: calc(100vh - 100px);
`;

export const StudentListSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const RecordsSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const StudentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StudentItem = styled.div`
  padding: 15px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${props => props.$isSelected ? '#e3f2fd' : 'white'};
  border: 1px solid ${props => props.$isSelected ? '#2196f3' : '#ddd'};
  
  &:hover {
    background-color: ${props => props.$isSelected ? '#e3f2fd' : '#f5f5f5'};
  }
`;

export const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StudentName = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`;

export const StudentGrade = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

export const FilterContainer = styled.div`
  margin-bottom: 2rem;
`;

export const RecordsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RecordItem = styled.div`
  padding: 15px;
  margin-bottom: 10px;
  background-color: ${props => props.$isSelected ? '#e3f2fd' : '#fff'};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const RecordDate = styled.div`
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const RecordSummary = styled.div`
  padding: 15px;
  width: 100%;
  
  ul {
    margin: 8px 0;
  }
  
  li {
    margin: 5px 0;
    line-height: 1.4;
  }
`;

export const NoRecords = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`; 