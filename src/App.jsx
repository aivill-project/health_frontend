import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout/Layout';
import ExerciseListPage from './pages/exercise/ExerciseListPage/ExerciseListPage';
import StudentSelect from './pages/exercise/StudentSelectPage/StudentSelectPage';
import ExerciseDetailForm from './pages/exercise/ExerciseDetailPage/ExerciseDetailPage';
import ExerciseChart from './pages/exercise/ExerciseChartPage/ExerciseChartPage';
import ExerciseRecordsPage from './pages/exercise/ExerciseRecordsPage/ExerciseRecordsPage';
import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ExerciseRecordChartPage from './pages/exercise/ExerciseRecordChartPage/ExerciseRecordChartPage';
// QueryClient 인스턴스 생성
const queryClient = new QueryClient();

const App = () => {
  console.log('Current path:', window.location.pathname); // 디버깅용

  return (
      <BrowserRouter>
        <Layout>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/exercise/list" element={<ExerciseListPage />} />
            <Route path="/exercise/records" element={<ExerciseRecordsPage />} />
            <Route path="/exercise/chart" element={<ExerciseChart />} />
            <Route path="/exercise/records/chart" element={<ExerciseRecordChartPage />} />
            <Route path="/student-select" element={<StudentSelect />} />
            <Route path="/exercise/detail" element={<ExerciseDetailForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </QueryClientProvider>
        </Layout>
      </BrowserRouter>
  );
};

export default App;