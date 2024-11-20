import api from './api';

export const getExerciseAnalysis = async (exerciseHistory, studentInfo) => {
  try {
    console.log('Sending analysis request with data:', {
      exerciseHistory,
      studentInfo
    });

    const response = await api.post('/exercise-analysis/analyze', {
      exerciseHistory,
      studentInfo
    });
    
    console.log('Analysis API response:', response.data);
    
    if (response.data && response.data.status === 'success') {
      return response.data.data.recommendation;
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('운동 분석 요청 실패:', error.response || error);
    throw error;
  }
}; 