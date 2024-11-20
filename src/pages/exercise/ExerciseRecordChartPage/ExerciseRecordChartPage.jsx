import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header/Header';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ChartSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const OrderTitle = styled.h3`
  color: #1976d2;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e3f2fd;
`;

const ExerciseList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ExerciseItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const ExerciseName = styled.span`
  flex: 1;
  font-size: 1.1em;
`;

const ExerciseCount = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
`;

const CountBar = styled.div`
  width: ${props => props.$percentage}%;
  height: 24px;
  background-color: #bbdefb;
  border-radius: 12px;
  margin-right: 10px;
  transition: width 0.3s ease;
  min-width: 20px;
`;

const CountNumber = styled.span`
  font-weight: bold;
  color: #1976d2;
  min-width: 60px;
  text-align: right;
`;

const ExerciseRecordChartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    selectedStudent,
    exerciseOrders,
    created_at,
    recordId
  } = location.state || {};

  console.log('Chart page data:', {
    selectedStudent,
    exerciseOrders,
    created_at,
    recordId
  });

  // 데이터 유효성 검사
  if (!exerciseOrders || !selectedStudent) {
    return (
      <>
        <Header 
          title="운동 기록 차트"
          onBack={() => navigate(-1)}
        />
        <Container>
          <div>데이터를 불러올 수 없습니다.</div>
        </Container>
      </>
    );
  }

  // 각 운동 차수별 최대 횟수 계산
  const getMaxCount = (exercises) => {
    return Math.max(...Object.values(exercises).map(count => Number(count)));
  };

  // 날짜 시간 포맷팅
  const formatDateTime = (dateTimeStr) => {
    const date = new Date(dateTimeStr);
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).replace(/\. /g, '.').replace(/:/g, '.');
  };

  return (
    <>
      <Header 
        title={`${selectedStudent.name} - ${formatDateTime(created_at)} 운동 기록`}
        onBack={() => navigate(-1)}
      />
      <Container>
        {Object.entries(exerciseOrders).map(([order, exercises]) => {
          const maxCount = getMaxCount(exercises);
          
          return (
            <ChartSection key={order}>
              <OrderTitle>{order} 운동</OrderTitle>
              <ExerciseList>
                {Object.entries(exercises).map(([name, count]) => {
                  const percentage = (count / maxCount) * 100;
                  console.log(`${name}: ${count} / ${maxCount} = ${percentage}%`);
                  
                  return (
                    <ExerciseItem key={name}>
                      <ExerciseName>{name}</ExerciseName>
                      <ExerciseCount>
                        <CountBar 
                          $percentage={percentage} 
                          style={{ width: `${percentage}%` }}
                        />
                        <CountNumber>{count}회</CountNumber>
                      </ExerciseCount>
                    </ExerciseItem>
                  );
                })}
              </ExerciseList>
            </ChartSection>
          );
        })}
      </Container>
    </>
  );
};

export default ExerciseRecordChartPage; 