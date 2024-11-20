import React from 'react';
import styled from 'styled-components';

const AddStudentButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <PlusIcon>+</PlusIcon>
      학생 추가
    </Button>
  );
};

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 120px;
  height: 40px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  &:hover {
    background-color: #0056b3;
  }
`;

const PlusIcon = styled.span`
  margin-right: 8px;
  font-size: 20px;
  font-weight: bold;
`;

export default AddStudentButton; 