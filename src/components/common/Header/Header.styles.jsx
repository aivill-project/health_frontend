import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #eee;
  padding: 0 16px;
  flex-shrink: 0;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  flex: 1;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
`; 