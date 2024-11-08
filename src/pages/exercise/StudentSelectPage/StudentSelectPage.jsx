import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header/Header';
import {
  Container,
  Title,
} from '../../../components/exercise/StudentSelect/StudentSelect.styles';
import { students } from '../../../components/exercise/StudentSelect/StudentData';
import StudentList from '../../../components/exercise/StudentSelect/StudentList';
import NextButtonComponent from '../../../components/exercise/StudentSelect/NextButton';

const StudentSelectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedExercises = [] } = location.state || {};
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
  };

  const handleNext = () => {
    if (selectedStudent) {
      navigate('/exercise-detail', {
        state: {
          selectedStudent,
          selectedExercises
        }
      });
    }
  };

  return (
    <>
      <Header title="학생 선택" />
      <Container>
        <StudentList 
          students={students}
          onStudentSelect={handleStudentSelect}
          selectedStudent={selectedStudent}
        />

        <NextButtonComponent 
          onClick={handleNext}
          disabled={!selectedStudent}
          $show={selectedStudent !== null}
        />
      </Container>
    </>
  );
};

export default StudentSelectPage;