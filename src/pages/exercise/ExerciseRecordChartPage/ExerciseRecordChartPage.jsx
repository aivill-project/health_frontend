import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getExerciseAnalysis } from '../../../services/exerciseAnalysisService';
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

const AnalysisSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const AnalysisTitle = styled.h3`
  color: #1976d2;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e3f2fd;
`;

const AnalysisContent = styled.div`
  white-space: pre-line;
  line-height: 1.6;
  
  h4 {
    color: #333;
    margin: 15px 0 10px 0;
  }
  
  ul {
    margin: 0;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 5px;
  }
`;

const LoadingSpinner = styled.div`
  text-align: center;
  padding: 20px;
  color: #666;
`;

const AnalysisButton = styled.button`
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 15px;

  &:hover {
    background-color: #1565c0;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ExerciseRecordChartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [analysis, setAnalysis] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  
  const {
    selectedStudent,
    exerciseOrders,
    created_at,
    recordId
  } = location.state || {};

  useEffect(() => {
    const fetchAnalysis = async () => {
      if (!exerciseOrders || !selectedStudent) return;

      try {
        setIsLoading(true);
        // API 호출을 위한 데이터 준비
        const exerciseHistory = [{
          date: created_at,
          exercise_orders: exerciseOrders
        }];

        const recommendation = await getExerciseAnalysis(
          exerciseHistory,
          selectedStudent
        );
        
        setAnalysis(recommendation);
      } catch (error) {
        console.error('운동 분석 중 오류:', error);
        setAnalysis('운동 분석을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalysis();
  }, [exerciseOrders, selectedStudent, created_at]);

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

  const handleAnalysisClick = async () => {
    if (!exerciseOrders || !selectedStudent) return;

    try {
      setIsLoading(true);
      setShowAnalysis(true);
      
      const exerciseHistory = [{
        date: created_at,
        exercise_orders: exerciseOrders
      }];

      console.log('Sending data to analysis:', {
        exerciseHistory,
        selectedStudent
      });
      
      const recommendation = await getExerciseAnalysis(
        exerciseHistory,
        selectedStudent
      );
      
      setAnalysis(recommendation);
    } catch (error) {
      console.error('운동 분석 중 오류:', error);
      setAnalysis('운동 분석을 불러오는 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header 
        title={`${selectedStudent?.name} - ${formatDateTime(created_at)} 운동 기록`}
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

        {/* AI 분석 섹션 */}
        <AnalysisSection>
          <AnalysisTitle>AI 트레이너 분석</AnalysisTitle>
          <AnalysisButton 
            onClick={handleAnalysisClick}
            disabled={isLoading}
          >
            {isLoading ? '분석 중...' : '운동 분석 시작'}
          </AnalysisButton>
          
          {showAnalysis && (
            isLoading ? (
              <LoadingSpinner>
                <div>AI 트레이너가 운동을 분석하고 있습니다...</div>
                <div>잠시만 기다려주세요.</div>
              </LoadingSpinner>
            ) : (
              <AnalysisContent>
                {analysis}
              </AnalysisContent>
            )
          )}
        </AnalysisSection>
      </Container>
    </>
  );
};

export default ExerciseRecordChartPage; 