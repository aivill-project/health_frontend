import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorBoundary from './components/ErrorBoundary';
import ExerciseList from './pages/exercise/ExerciseListPage/ExerciseListPage';
import StudentSelect from './pages/exercise/StudentSelectPage/StudentSelectPage';
import ExerciseDetailForm from './pages/exercise/ExerciseDetailPage/ExerciseDetailPage';
import ExerciseChart from './pages/exercise/ExerciseChartPage/ExerciseChartPage';

// QueryClient 인스턴스 생성
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ExerciseList />} />
            <Route path="/student-select" element={<StudentSelect />} />
            <Route path="/exercies-list" element={<ExerciseList />} />
            <Route path="/exercise-detail" element={<ExerciseDetailForm />} />
            <Route path="/exercise-chart" element={<ExerciseChart />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export default App;