import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 16px;
  max-width: 430px;
  margin: 0 auto;
`;

export const ExerciseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 80px;
`;

export const ExerciseCard = styled.div`
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 430px;
  margin: 0 auto;
  padding: 16px;
  background: linear-gradient(to top, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0));
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

export const CancelButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  background: white;
  color: #495057;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f8f9fa;
    border-color: #ced4da;
  }

  &:active {
    background: #f1f3f5;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const CategoryExerciseList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const SelectedExercise = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;

  span {
    font-size: 14px;
    color: #495057;
  }

  button {
    background: none;
    border: none;
    color: #fa5252;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #e03131;
    }
  }

  @media (max-width: 430px) {
    padding: 10px 14px;
  }
`;

export const AddExerciseButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  background: white;
  color: #228be6;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    background: #f8f9fa;
    border-color: #228be6;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ExerciseInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-size: 14px;
  color: #495057;
  margin-bottom: 16px;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #228be6;
    box-shadow: 0 0 0 3px rgba(34, 139, 230, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }

  @media (max-width: 430px) {
    padding: 10px 14px;
    font-size: 16px;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px dashed #adb5bd;
  background: white;
  color: #495057;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  height: 100%;
  min-height: 80px;

  &:hover {
    border-color: #228be6;
    color: #228be6;
    background: #f8f9fa;
  }

  svg {
    margin-right: 6px;
    width: 16px;
    height: 16px;
  }

  @media (max-width: 430px) {
    min-height: 70px;
    font-size: 13px;
  }
`;

export const ExerciseItemContainer = styled.div`
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 48px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: #228be6;
    background: #f8f9fa;
  }

  span {
    font-size: 14px;
    color: #495057;
    line-height: 1.4;
    word-break: keep-all;
  }

  @media (max-width: 430px) {
    padding: 10px 14px;
    min-height: 44px;
    
    span {
      font-size: 13px;
    }
  }
`;

export const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 12px;
  padding: 0 4px;

  @media (max-width: 430px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

export const ExerciseItemText = styled.span`
  font-size: 14px;
  color: #495057;
  flex: 1;
  margin-right: 12px;
  word-break: keep-all;
  line-height: 1.4;

  @media (max-width: 430px) {
    font-size: 13px;
    margin-right: 8px;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  color: #fa5252;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border-radius: 4px;

  &:hover {
    background: #fff5f5;
    color: #e03131;
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 430px) {
    padding: 6px;
    
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #343a40;
  margin: 0;
  line-height: 1.4;
  margin-right: 8px;

  @media (max-width: 430px) {
    font-size: 15px;
    margin-right: 6px;
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 8px 10px;
  min-width: 120px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const AddCategoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  min-width: 20px;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  background: white;
  color: #228be6;
  cursor: pointer;
  transition: all 0.2s;
  padding: 0;
  flex-shrink: 0;

  &:hover {
    background: #f8f9fa;
    color: #1c7ed6;
    border-color: #228be6;
  }

  &:active {
    background: #e9ecef;
  }

  svg {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 430px) {
    width: 18px;
    height: 18px;
    min-width: 18px;
    
    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const SelectedExercises = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .empty-message {
    text-align: center;
    color: #868e96;
    font-size: 14px;
    padding: 12px 0;
  }
`;

export const AddExerciseFormWrapper = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin: 12px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e9ecef;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;

  .count {
    color: #868e96;
    font-size: 14px;
    font-weight: normal;
  }
`;

export const CategorySection = styled.section`
  margin-bottom: 24px;
  width: 100%;
`;

export const NextButtonStyled = styled.button`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 32px);
  max-width: 400px;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background: #228be6;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(34, 139, 230, 0.3);
  z-index: 100;

  &:hover:not(:disabled) {
    background: #1c7ed6;
    transform: translateX(-50%) translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateX(-50%);
  }

  &:disabled {
    background: #adb5bd;
    cursor: not-allowed;
    transform: translateX(-50%);
    box-shadow: none;
  }

  span {
    margin-left: 4px;
  }

  @media (max-width: 430px) {
    bottom: 16px;
    padding: 14px;
    font-size: 15px;
    width: calc(100% - 24px);
  }
`;