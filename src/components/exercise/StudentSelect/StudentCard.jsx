import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
  StudentCardWrapper,
  StudentImage,
  StudentInfo,
  StudentName,
  StudentGrade,
  DeleteButton,
  GlobalStyle
} from './StudentSelect.styles';

const StudentCard = ({ student, isSelected, onSelect, onDelete }) => {
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(student);
  };

  return (
    <>
      <GlobalStyle />
      <StudentCardWrapper
        onClick={() => onSelect(student)}
        $isSelected={isSelected}
      >
        <DeleteButton 
          onClick={handleDelete}
          aria-label="학생 삭제"
        >
          <CloseIcon sx={{ fontSize: 16 }} />
        </DeleteButton>
        <StudentImage 
          src={student.profileImage} 
          alt={student.name} 
        />
        <StudentInfo>
          <StudentName $isSelected={isSelected}>{student.name}</StudentName>
          <StudentGrade $isSelected={isSelected}>
            {student.school_type}반 {student.grade}학년
          </StudentGrade>
        </StudentInfo>
      </StudentCardWrapper>
    </>
  );
};

export default StudentCard; 