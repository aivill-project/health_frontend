import React from 'react';
import { StudentListWrapper } from './StudentSelect.styles';
import StudentCard from './StudentCard';
import defaultProfile from '../../../assets/images/person.jpg';

const StudentList = ({ students, onStudentSelect, onStudentDelete, selectedStudent }) => {
  const handleStudentClick = (student) => {
    console.log('Clicked student:', student); // 디버깅용
    console.log('Current selectedStudent:', selectedStudent); // 디버깅용
    onStudentSelect(student);
  };

  return (
    <StudentListWrapper>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={{
            ...student,
            profileImage: student.profileImage || defaultProfile
          }}
          isSelected={selectedStudent?.id === student.id}
          onSelect={handleStudentClick}
          onDelete={onStudentDelete}
        />
      ))}
    </StudentListWrapper>
  );
};

export default StudentList; 