import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExerciseListPage from '../pages/exercise/ExerciseListPage/ExerciseListPage';
import StudentSelectPage from '../pages/exercise/StudentSelectPage/StudentSelectPage';
import ExerciseDetailPage from '../pages/exercise/ExerciseDetailPage/ExerciseDetailPage';
import ExerciseChartPage from '../pages/exercise/ExerciseChartPage/ExerciseChartPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ExerciseListPage />} />
      <Route path="/student-select" element={<StudentSelectPage />} />
      <Route path="/exercise-detail" element={<ExerciseDetailPage />} />
      <Route path="/exercise-chart" element={<ExerciseChartPage />} />
      <Route path="*" element={<ExerciseListPage />} />
    </Routes>
  );
};

export default AppRoutes; 