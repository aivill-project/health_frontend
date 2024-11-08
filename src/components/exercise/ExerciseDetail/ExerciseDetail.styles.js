import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
`;

export const Form = styled.div`
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const ExerciseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ExerciseItem = styled.div`
  background: ${props => props.selected ? '#e7f5ff' : '#f8f9fa'};
  border: 1px solid ${props => props.selected ? '#339af0' : '#dee2e6'};
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #e7f5ff;
    border-color: #339af0;
  }
`;

export const ExerciseName = styled.div`
  font-size: 15px;
  color: #333;
  font-weight: ${props => props.selected ? '600' : 'normal'};
`;

export const ExerciseInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;

  input {
    width: 80px;
    padding: 8px 12px;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    font-size: 14px;
    text-align: right;

    &:focus {
      outline: none;
      border-color: #339af0;
      box-shadow: 0 0 0 2px rgba(51, 154, 240, 0.1);
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      opacity: 1;
    }
  }
`;

export const ExerciseUnit = styled.span`
  font-size: 12px;
  color: #868e96;
`;

export const StudentProfileCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

export const StudentImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
  border: 2px solid #e9ecef;
`;

export const StudentInfo = styled.div`
  flex: 1;
`;

export const StudentName = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 4px;
`;

export const StudentClass = styled.p`
  margin: 0;
  font-size: 14px;
  color: #868e96;
`;

export const StudentGrade = styled.span`
  display: inline-block;
  padding: 4px 8px;
  background-color: #339af0;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  margin-left: 8px;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 430px;
  margin: 0 auto;
`;

export const ExerciseTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 16px;
  padding: 0 4px;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: #495057;
  margin-bottom: 8px;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #228be6 0%, #1971c2 100%);
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(34, 139, 230, 0.2);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(34, 139, 230, 0.3);
    background: linear-gradient(135deg, #1c7ed6 0%, #1864ab 100%);
  }

  &:active {
    transform: translateY(1px);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const NextButton = styled.button`
  width: 100%;
  max-width: 200px;
  padding: 14px 24px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #228be6 0%, #1971c2 100%);
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(34, 139, 230, 0.3);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(34, 139, 230, 0.4);
    background: linear-gradient(135deg, #1c7ed6 0%, #1864ab 100%);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(34, 139, 230, 0.3);
  }

  &:disabled {
    background: #adb5bd;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 430px) {
    max-width: none;
    width: 100%;
    font-size: 15px;
    padding: 12px 20px;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
  width: 100%;

  select {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    font-size: 14px;
    color: #495057;
    background-color: white;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 16px;

    &:focus {
      outline: none;
      border-color: #228be6;
      box-shadow: 0 0 0 3px rgba(34, 139, 230, 0.1);
    }
  }

  &::after {
    content: '';
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  @media (max-width: 430px) {
    margin-bottom: 12px;
    
    select {
      padding: 10px 14px;
      font-size: 16px;
    }
  }
`;

export const DateInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const StyledDateInput = styled.input`
  width: 200px;
  padding: 8px 12px;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  font-size: 14px;
  color: #495057;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #228be6;
    box-shadow: 0 0 0 3px rgba(34, 139, 230, 0.1);
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.6;
    
    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 430px) {
    width: 180px;
    font-size: 13px;
  }
`;

export const OrderSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const StyledOrderSelect = styled.select`
  width: 200px;
  padding: 8px 12px;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  font-size: 14px;
  color: #495057;
  background-color: white;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23495057' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 32px;

  &:focus {
    outline: none;
    border-color: #228be6;
    box-shadow: 0 0 0 3px rgba(34, 139, 230, 0.1);
  }

  @media (max-width: 430px) {
    width: 180px;
    font-size: 13px;
  }
`;

export const ExerciseSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ExerciseSectionTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin: 0 0 16px 0;
  font-weight: 600;
`;

export const ExerciseGridList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
`;

export const ExerciseGridItem = styled.div`
  background: ${props => props.selected ? '#e7f5ff' : '#f8f9fa'};
  border: 1px solid ${props => props.selected ? '#339af0' : '#dee2e6'};
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:hover {
    background: #e7f5ff;
    border-color: #339af0;
  }
`;

export const ExerciseGridName = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
  font-weight: ${props => props.selected ? '600' : 'normal'};
`;

export const ExerciseCount = styled.div`
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    color: #1c7ed6;
    font-weight: 600;
  }
`;
