import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>404</Title>
      <Message>페이지를 찾을 수 없습니다</Message>
      <HomeButton onClick={() => navigate('/')}>
        메인으로 돌아가기
      </HomeButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 6rem;
  margin: 0;
  color: #333;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin: 1rem 0 2rem;
`;

const HomeButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default NotFound; 