import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
`;

const Title = styled.h2`
  margin: 0 0 20px 0;
  font-size: 1.5rem;
  color: #343a40;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #495057;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #228be6;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    background-color: #dee2e6;
    cursor: not-allowed;
  }
`;

const CancelButton = styled(Button)`
  background-color: #e9ecef;
  color: #495057;

  &:hover {
    background-color: #dee2e6;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #228be6;
  color: white;

  &:hover {
    background-color: #1c7ed6;
  }
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #228be6;
  }
`;

const AddStudentModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    school_type: '초등'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'school_type' && { grade: '' })
    }));
  };

  const gradeOptions = {
    '초등': [1, 2, 3, 4, 5, 6],
    '중등': [1, 2, 3],
    '고등': [1, 2, 3]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      school_level: formData.school_type
    });
    setFormData({ name: '', grade: '', school_type: '초등' });
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Title>학생 등록</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="school_type">학교급</Label>
            <Select
              id="school_type"
              name="school_type"
              value={formData.school_type}
              onChange={handleChange}
              required
            >
              <option value="초등">초등학교</option>
              <option value="중등">중학교</option>
              <option value="고등">고등학교</option>
            </Select>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="grade">학년</Label>
            <Select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
            >
              <option value="">학년 선택</option>
              {gradeOptions[formData.school_type].map(grade => (
                <option key={grade} value={grade}>
                  {grade}학년
                </option>
              ))}
            </Select>
          </InputGroup>

          <ButtonGroup>
            <CancelButton type="button" onClick={onClose}>
              취소
            </CancelButton>
            <SubmitButton type="submit">
              등록
            </SubmitButton>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddStudentModal; 