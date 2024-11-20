import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchStudents } from '../../services/studentService';
import styled from 'styled-components';

const StudentSelector = ({ value, onChange }) => {
  const { data: students, isLoading } = useQuery({
    queryKey: ['students'],
    queryFn: fetchStudents
  });

  if (isLoading) return <div>학생 목록 로딩중...</div>;

  return (
    <Select
      value={value?.id || ''}
      onChange={(e) => {
        const selectedStudent = students?.find(
          student => String(student.id) === e.target.value
        );
        onChange(selectedStudent || null);
      }}
    >
      <option value="">학생 선택</option>
      {students?.map((student) => (
        <option key={student.id} value={student.id}>
          {student.name} ({student.grade})
        </option>
      ))}
    </Select>
  );
};

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

export default StudentSelector; 