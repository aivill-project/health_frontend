import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const BackButtonContainer = styled.button`
  border: none;
  background: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  margin-right: 8px;

  &:hover {
    opacity: 0.7;
  }
`;

export const PageTitleText = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
  flex: 1;
`; 