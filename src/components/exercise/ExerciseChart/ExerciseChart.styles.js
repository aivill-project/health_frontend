import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 24px;
`;

export const ChartContainer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  margin: 0 -12px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .recharts-wrapper {
    width: 100% !important;
    min-width: 280px;
    height: auto !important;
    min-height: 250px;
    max-height: 300px;

    .recharts-surface {
      width: 100%;
      height: 100%;
    }
  }

  .recharts-legend-wrapper {
    padding: 0 2px;
  }

  .recharts-legend-item {
    margin-right: 3px !important;
  }

  .recharts-legend-item-text {
    margin-left: 2px !important;
  }

  @media (max-width: 360px) {
    .recharts-legend-item {
      margin-right: 2px !important;
    }

    .recharts-legend-item-text {
      margin-left: 1px !important;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const Header = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: #212529;
    margin: 0;
  }

  .back-button {
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background: #f1f3f5;
    color: #495057;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #e9ecef;
    }
  }
`;

export const StudentProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;

export const StudentImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 16px;
  object-fit: cover;
`;

export const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StudentName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 4px;
`;

export const StudentClass = styled.span`
  font-size: 14px;
  color: #868e96;
`;

export const DateInfo = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px 24px;
  margin-bottom: 24px;
  font-size: 16px;
  color: #495057;
  font-weight: 500;
  display: flex;
  align-items: center;
  border-left: 4px solid #228be6;
  
  &::before {
    content: '📅';
    margin-right: 12px;
    font-size: 20px;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease;
  }
`;

export const TableContainer = styled.div`
  margin: 0 -16px;
  padding: 16px;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 300px;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: #f8f9fa;
`;

export const TableBody = styled.tbody`
  background-color: white;
`;

export const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #dee2e6;
  }

  &:hover {
    background-color: #f8f9fa;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  text-align: center;
  font-size: 14px;
  color: #495057;

  &:first-child {
    text-align: left;
    font-weight: 500;
    color: #212529;
    position: sticky;
    left: 0;
    background-color: inherit;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 12px;
  text-align: center;
  font-weight: 600;
  color: #212529;
  background-color: #f8f9fa;

  &:first-child {
    text-align: left;
    position: sticky;
    left: 0;
    z-index: 1;
    background-color: #f8f9fa;
  }
`;

export const BackButton = styled.button`
  padding: 12px 24px;
  background-color: #007AFF;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 24px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ExerciseInfo = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  padding: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ExerciseDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
`;

export const ExerciseLabel = styled.div`
  font-size: 14px;
  color: #868e96;
  margin-bottom: 4px;
`;

export const ExerciseValue = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #339af0;
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
`;

export const SaveButton = styled.button`
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(34, 139, 230, 0.4);
    background: linear-gradient(135deg, #1c7ed6 0%, #1864ab 100%);
  }

  &:disabled {
    background: linear-gradient(135deg, #dee2e6 0%, #adb5bd 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`; 