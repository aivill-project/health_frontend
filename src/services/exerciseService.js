import axios from 'axios';
import { EXERCISE_CATEGORIES, isValidCategory } from '../constants/exercises';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 기본 카테고리 설정 (서버에서 카테고리가 없거나 매칭되지 않을 경우)
const DEFAULT_CATEGORY = EXERCISE_CATEGORIES.CARDIO; // '심폐지구력'

// 운동 목록 조회
export const fetchExercises = async () => {
  try {
    const response = await api.get('/api/exercises');
    console.log('서버 응답 데이터:', response.data);
    
    const groupedExercises = Object.values(EXERCISE_CATEGORIES).reduce((acc, category) => {
      acc[category] = [];
      return acc;
    }, {});

    if (Array.isArray(response.data)) {
      response.data.forEach(exercise => {
        const exerciseData = {
          id: exercise.exercise_id, // id 포함
          name: exercise.name,
          category: exercise.category || DEFAULT_CATEGORY
        };

        if (!exerciseData.category || !isValidCategory(exerciseData.category)) {
          exerciseData.category = DEFAULT_CATEGORY;
        }

        // id와 name을 함께 저장
        groupedExercises[exerciseData.category].push({
          id: exerciseData.id,
          name: exerciseData.name
        });
      });
    }

    console.log('분류된 운동 목록:', groupedExercises);
    return groupedExercises;
  } catch (error) {
    console.error('운동 목록 조회 실패:', error);
    return Object.values(EXERCISE_CATEGORIES).reduce((acc, category) => {
      acc[category] = [];
      return acc;
    }, {});
  }
};

// 운동 추가
export const addExercise = async (category, name) => {
  try {
    // 유효한 카테고리인지 확인
    if (!isValidCategory(category)) {
      console.log('유효하지 않은 카테고리:', category);
      category = EXERCISE_CATEGORIES.CARDIO; // 기본값: '심폐지구력'
    }

    console.log('운동 추가 요청:', { 
      category,
      name,
      description: null,
      category_name: category
    });
    
    const response = await api.post('/api/exercises', { 
      category,
      name,
      description: null,
      category_name: category
    });
    
    console.log('운동 추가 응답:', response.data);
    return response.data;
  } catch (error) {
    console.error('운동 추가 실패:', error);
    throw error;
  }
};

// 운동 삭제 (id로 삭제)
export const removeExercise = async (exerciseId) => {
  try {
    console.log('운동 삭제 요청 ID:', exerciseId);
    const response = await api.delete(`/api/exercises/${exerciseId}`);
    console.log('운동 삭제 응답:', response.data);
    return response.data;
  } catch (error) {
    console.error('운동 삭제 실패:', error);
    throw error;
  }
}; 