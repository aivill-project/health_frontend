import React from 'react';
import {
  StudentListWrapper,
  StudentCardWrapper,
  StudentImage,
  StudentInfo,
  StudentName,
  StudentGrade,
} from './StudentSelect.styles';
import defaultProfile from '../../../assets/images/person.jpg';

const StudentList = ({ students, onStudentSelect, selectedStudent }) => {
  return (
    <StudentListWrapper>
      {students.map((student) => (
        <StudentCardWrapper 
          key={student.id}
          onClick={() => onStudentSelect(student)}
          $isSelected={selectedStudent?.id === student.id}
        >
          <StudentImage 
            src={student.profileImage || defaultProfile} 
            alt={student.name}
            onError={(e) => {
              e.target.src = defaultProfile;
            }}
          />
          <StudentInfo>
            <StudentName>{student.name}</StudentName>
            <StudentGrade>{student.grade}학년 {student.class}반</StudentGrade>
          </StudentInfo>
        </StudentCardWrapper>
      ))}
    </StudentListWrapper>
  );
};

export default StudentList; 