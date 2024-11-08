import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Form = styled.form`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const StudentInfoSection = styled.div`
  margin-bottom: 20px;
`;

export const StudentDetails = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 8px;

  div {
    margin: 5px 0;
  }
`;

export const StudentName = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

export const StudentGrade = styled.div`
  color: #666;
`;

export const DateContainer = styled.div`
  margin-bottom: 20px;
  
  .MuiTextField-root {
    width: 100%;
  }
`;

export const RoundContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
`;

export const SelectBox = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 4px;
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const NumberInput = styled.input`
  width: 100px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const SubmitButton = styled.button`
  padding: 10px 30px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #1565c0;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const AddRoundButton = styled.button`
  padding: 8px 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ExerciseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;