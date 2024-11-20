import styled from 'styled-components';

export const NextButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 40px;
  background-color: #007AFF;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  opacity: ${props => (props.$show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  pointer-events: ${props => (props.$show ? 'auto' : 'none')};

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`; 