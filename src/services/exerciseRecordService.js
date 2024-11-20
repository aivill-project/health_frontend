import api from './api';

// 날짜 포맷팅 함수
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// 학생의 모든 운동 기록 조회
export const getStudentRecords = async (studentId) => {
  try {
    const response = await api.get(`/exercise-records/student/${studentId}`);
    return response.data.data;
  } catch (error) {
    console.error('학생 운동 기록 조회 실패:', error);
    throw error;
  }
};

// 특정 날짜의 운동 기록 상세 조회
export const getRecordByDate = async (studentId, date) => {
  try {
    const response = await api.get(`/exercise-records/student/${studentId}/date`, {
      params: { date }
    });
    return response.data.data;
  } catch (error) {
    console.error('날짜별 운동 기록 조회 실패:', error);
    throw error;
  }
};

// 운동 기록 상세 조회
export const getRecordDetails = async (recordId) => {
  try {
    const response = await api.get(`/exercise-records/${recordId}/details`);
    console.log('Record details response:', response.data);
    return response.data.data;
  } catch (error) {
    console.error('운동 기록 상세 조회 실패:', error);
    throw error;
  }
};

// 운동 기록 저장
export const saveExerciseRecord = async (recordData) => {
  try {
    if (!recordData.student_id) throw new Error('Student ID is required');
    
    const formattedData = {
      student_id: recordData.student_id,
      date: recordData.date,
      exercises: recordData.exercises.map(name => ({ name })),
      exercise_orders: recordData.exercise_orders
    };

    console.log('Saving exercise record:', formattedData);

    const response = await api.post('/exercise-records', formattedData);
    return response.data;
  } catch (error) {
    console.error('Failed to save exercise record:', error);
    throw error;
  }
};

// 특정 학생의 모든 운동 기록 조회
export const getAllStudentRecords = async (studentId) => {
  try {
    const response = await api.get(`/exercise-records/student/${studentId}/all`);
    console.log('API response:', response.data);
    
    // response.data.data.records 배열 반환
    return response.data.data.records || [];
  } catch (error) {
    console.error('학생 운동 기록 전체 조회 실패:', error);
    throw error;
  }
};

// 특정 운동 기록 상세 조회
// export const getExerciseRecordDetail = async (recordId) => {
//   try {
//     const response = await api.get(`/exercise-records/${recordId}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching exercise record detail:', error);
//     throw error;
//   }
// };