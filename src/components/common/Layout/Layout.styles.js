import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 430px;  // 일반적인 모바일 앱 너비
  min-height: 100vh;
  margin: 0 auto;
  background-color: #f8f9fa;
  position: relative;
  overflow-x: hidden;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 430px) {
    width: 100%;
    box-shadow: none;
  }
`;

export const Content = styled.div`
  padding: 16px;
  padding-bottom: 80px; // 하단 버튼이나 네비게이션을 위한 여백
  min-height: calc(100vh - 60px); // 헤더 높이를 고려한 최소 높이
`; 