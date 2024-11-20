import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 학생 목록 조회
export const fetchStudents = async () => {
  try {
    const response = await api.get('/api/students');
    console.log('Raw student data:', response.data); // 원본 데이터 확인
    
    // 데이터 구조 맞추기
    const formattedData = response.data.map(student => ({
      id: student.student_id,  // student_id를 id로 매핑
      name: student.name,
      grade: student.grade,
      school_type: student.school_type
    }));
    
    console.log('Formatted student data:', formattedData);
    return formattedData;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

// 학생 추가
export const addStudent = async (studentData) => {
  try {
    const response = await api.post('/api/students', studentData);
    return response.data;
  } catch (error) {
    console.error('학생 추가 실패:', error);
    throw error;
  }
};

// 학생 삭제
export const removeStudent = async (studentId) => {
  try {
    const response = await api.delete(`/api/students/${studentId}`);
    return response.data;
  } catch (error) {
    console.error('학생 삭제 실패:', error);
    throw error;
  }
}; 