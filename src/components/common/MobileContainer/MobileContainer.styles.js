import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: #fff;
  min-height: 100vh;
  position: relative;
  
  @media (min-width: 481px) {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
`; 