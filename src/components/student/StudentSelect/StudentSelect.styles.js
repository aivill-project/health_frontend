import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
`;

export const StudentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
`;

export const StudentCard = styled.div`
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const StudentImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-bottom: 8px;
  object-fit: cover;
`;

export const StudentName = styled.div`
  font-weight: 500;
  margin-bottom: 4px;
`;

export const StudentClass = styled.div`
  font-size: 14px;
  color: #666;
`;

export const SearchContainer = styled.div`
  margin-bottom: 20px;
  padding: 0 16px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #228be6;
    box-shadow: 0 0 0 3px rgba(34, 139, 230, 0.1);
  }

  @media (max-width: 430px) {
    font-size: 16px;
    padding: 10px 12px;
  }
`; 