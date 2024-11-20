import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchStudents, addStudent, removeStudent } from '../../../services/studentService';
import Header from '../../../components/common/Header/Header';
import {
  Container,
  Title,
  LoadingSpinner,
  ErrorMessage
} from '../../../components/exercise/StudentSelect/StudentSelect.styles';
import StudentList from '../../../components/exercise/StudentSelect/StudentList';
import NextButtonComponent from '../../../components/exercise/StudentSelect/NextButton';
import AddStudentButton from '../../../components/exercise/StudentSelect/AddStudentButton';
import AddStudentModal from '../../../components/exercise/StudentSelect/AddStudentModal';
import { ButtonContainer } from './StudentSelectPage.styles';

const StudentSelectPage = ({ onStudentSelect, selectedStudent: externalSelectedStudent }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  
  // location.state에서 selectedExercises 받아오기
  const initialExercises = location.state?.selectedExercises || [];
  
  const [selectedStudent, setSelectedStudent] = useState(externalSelectedStudent);
  const [selectedExercises, setSelectedExercises] = useState(initialExercises);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log('Received exercises:', initialExercises); // 디버깅용

  // 학생 목록 조회
  const { 
    data: students, 
    isLoading, 
    error 
  } = useQuery({
    queryKey: ['students'],
    queryFn: fetchStudents
  });

  // 학생 추가 mutation
  const addStudentMutation = useMutation({
    mutationFn: addStudent,
    onSuccess: () => {
      queryClient.invalidateQueries(['students']);
      setIsModalOpen(false);
    }
  });

  // 학생 삭제 mutation
  const deleteStudentMutation = useMutation({
    mutationFn: (student_id) => removeStudent(student_id),
    onSuccess: (_, deletedStudentId) => {
      queryClient.invalidateQueries(['students']);
      if (selectedStudent?.student_id === deletedStudentId) {
        setSelectedStudent(null);
      }
    }
  });

  // 학생이 선택되었을 때의 처리
  const handleStudentSelect = (student) => {
    console.log('Selected student:', student);
    console.log('Current selectedStudent:', selectedStudent);
    console.log('Comparing IDs:', {
      newId: student.id || student.student_id,
      currentId: selectedStudent?.id || selectedStudent?.student_id
    });
    
    // ID 필드명 통일 (id 또는 student_id)
    const newStudentId = student.id || student.student_id;
    const currentStudentId = selectedStudent?.id || selectedStudent?.student_id;
    
    // 같은 학생을 다시 선택한 경우 선택 해제
    if (selectedStudent && newStudentId === currentStudentId) {
      console.log('Deselecting student');
      setSelectedStudent(null);
      onStudentSelect?.(null);
    } else {
      // 새로운 학생 선택
      console.log('Selecting new student');
      const formattedStudent = {
        ...student,
        id: newStudentId,
        student_id: newStudentId
      };
      setSelectedStudent(formattedStudent);
      onStudentSelect?.(formattedStudent);
    }
  };

  // 학생 추가
  const handleAddStudent = (studentData) => {
    addStudentMutation.mutate(studentData);
  };

  // 학생 삭제
  const handleDeleteStudent = (student) => {
    if (window.confirm(`${student.name} 학생을 삭제하시겠습니까?`)) {
      deleteStudentMutation.mutate(student.id || student.student_id);
    }
  };

  // 다음 버튼 클릭 처리
  const handleNext = () => {
    if (selectedStudent) {
      const navigationData = {
        selectedStudent,
        selectedExercises // location.state에서 받아온 운동 목록 전달
      };

      console.log('Navigating with data:', navigationData);
      
      navigate('/exercise/detail', {
        state: navigationData
      });
    }
  };

  // 로딩 중일 때
  if (isLoading) {
    return <LoadingSpinner>데이터를 불러오는 중...</LoadingSpinner>;
  }

  // 에러가 있을 때
  if (error) {
    return <ErrorMessage>학생 목록을 불러오는데 실패했습니다. {error.message}</ErrorMessage>;
  }

  return (
    <>
      <Header title="학생 선택" />
      <Container>
      <StudentList 
        students={students || []}
        onStudentSelect={handleStudentSelect}
        onStudentDelete={handleDeleteStudent}
        selectedStudent={selectedStudent}
      />

      <ButtonContainer>
        {location.pathname !== '/exercise/records' && (
          <NextButtonComponent 
            onClick={handleNext}
            disabled={!selectedStudent}
            $show={true}
          />
        )}

        <AddStudentButton 
          onClick={() => setIsModalOpen(true)} 
        />
      </ButtonContainer>
      
      <AddStudentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddStudent}
      />
      </Container>
    </>
  );
};

export default StudentSelectPage;