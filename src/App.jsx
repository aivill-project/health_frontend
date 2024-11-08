import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExerciseList from './pages/exercise/ExerciseListPage/ExerciseListPage';
import StudentSelect from './pages/exercise/StudentSelectPage/StudentSelectPage';
import ExerciseDetailForm from './pages/exercise/ExerciseDetailPage/ExerciseDetailPage';
import ExerciseChart from './pages/ExerciseChartPage/ExerciseChart';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ExerciseList />} />
      <Route path="/student-select" element={<StudentSelect />} />
      <Route path="/exercise-detail" element={<ExerciseDetailForm />} />
      <Route path="/exercise-chart" element={<ExerciseChart />} />
    </Routes>
  );
};

export default App; 