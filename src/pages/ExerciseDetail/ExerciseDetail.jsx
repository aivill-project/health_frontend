import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import ExerciseDetailForm from '../exercise/ExerciseDetailPage/ExerciseDetailPage';

const ExerciseDetail = () => {
  const location = useLocation();
  const selectedExercises = location.state?.selectedExercises || [];
  const selectedStudent = location.state?.selectedStudent;

  console.log('Selected Exercises:', selectedExercises); // 디버깅용
  console.log('Selected Student:', selectedStudent); // 디버깅용

  // 데이터가 없으면 홈으로 리다이렉트
  if (!selectedExercises.length || !selectedStudent) {
    return <Navigate to="/" />;
  }

  return (
    <ExerciseDetailForm 
      exercises={selectedExercises}
      selectedStudent={selectedStudent}
    />
  );
};

export default ExerciseDetail;