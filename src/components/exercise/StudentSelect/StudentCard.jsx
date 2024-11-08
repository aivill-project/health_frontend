import React from 'react';
import {
  StudentCardWrapper,
  StudentImage,
  StudentInfo,
  StudentName,
  StudentGrade
} from './StudentSelect.styles';

const StudentCard = ({ student, isSelected, onSelect }) => {
  return (
    <StudentCardWrapper
      onClick={() => onSelect(student)}
      $isSelected={isSelected}
    >
      <StudentImage 
        src={student.profileImage} 
        alt={student.name} 
      />
      <StudentInfo>
        <StudentName>{student.name}</StudentName>
        <StudentGrade>{student.grade}학년 {student.class}반</StudentGrade>
      </StudentInfo>
    </StudentCardWrapper>
  );
};

export default StudentCard; 