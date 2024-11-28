import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MobileContainer from '../../components/common/MobileContainer/MobileContainer';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <Container>
        <Title>태권월드 운동 기록 📝</Title>
      
      <ContentSection>
        <Heading> 사용 방법 ❔ </Heading>
        
        <GuideBox>

        <GuideItem>
            <StepNumber>1</StepNumber>
            <StepText>
              <strong>운동 선택</strong>
              <p>오늘 진행할 운동 종목들을 선택합니다.</p>
            </StepText>
          </GuideItem>
          <GuideItem>
            <StepNumber>2</StepNumber>
            <StepText>
              <strong>학생 선택</strong>
              <p>운동을 기록할 학생을 선택합니다.</p>
            </StepText>
          </GuideItem>
          <GuideItem>
            <StepNumber>3</StepNumber>
            <StepText>
              <strong>운동 기록</strong>
              <p>각 운동별 횟수를 차수에 맞춰 입력합니다.</p>
            </StepText>
          </GuideItem>

          <GuideItem>
            <StepNumber>4</StepNumber>
            <StepText>
              <strong>기록 확인</strong>
              <p>입력된 운동 기록을 차트와 목록으로 확인할 수 있습니다.</p>
            </StepText>
          </GuideItem>
        </GuideBox>

        <ButtonGroup>
          <StartButton onClick={() => navigate('/exercise/list')}>
            운동 시작하기
          </StartButton>
          <ViewRecordsButton onClick={() => navigate('/exercise/records')}>
            운동 기록 확인하기
          </ViewRecordsButton>
        </ButtonGroup>
      </ContentSection>
      </Container>
    </MobileContainer>
  );
};

const Container = styled.div`
  padding: 1rem;
  height: 100%;
  overflow-y: auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin: 1rem 0;
  font-size: 1.8rem;
  word-break: keep-all;
`;

const ContentSection = styled.section`
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  color: #444;
  margin-bottom: 1.2rem;
  font-size: 1.3rem;
`;

const GuideBox = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const GuideItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 8px;
`;

const StepNumber = styled.div`
  width: 32px;
  height: 32px;
  background: #007bff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  flex-shrink: 0;
`;

const StepText = styled.div`
  strong {
    display: block;
    margin-bottom: 0.3rem;
    color: #333;
    font-size: 0.95rem;
  }
  
  p {
    color: #666;
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const ButtonGroup = styled.div`
  display: grid;
  gap: 0.8rem;
  margin-top: 1.5rem;
`;

const StartButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }
`;

const ViewRecordsButton = styled(StartButton)`
  background: #28a745;  // 다른 색상 사용

  &:hover {
    background: #218838;
  }
`;

export default MainPage; 