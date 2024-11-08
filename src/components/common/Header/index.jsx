import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: white;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  font-size: 24px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  flex: 1;
  text-align: center;
`;

const Header = ({ title, onBackClick }) => {
  return (
    <HeaderContainer>
      <BackButton onClick={onBackClick}>←</BackButton>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default Header; 