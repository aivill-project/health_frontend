import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100vh;
  margin: 0 auto;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 481px) {
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
  }
`; 