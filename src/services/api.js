import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  withCredentials: true,
  timeout: 100000
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  (config) => {
    // 토큰이 필요한 경우 여기서 추가
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 에러 처리
    if (error.response) {
      // 서버가 응답을 반환한 경우
      console.error('Response error:', error.response.data);
      
      // 401 에러 (인증 실패)
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        // 로그인 페이지로 리다이렉트 등의 처리
      }
    } else if (error.request) {
      // 요청은 보냈지만 응답을 받지 못한 경우
      console.error('Request error:', error.request);
    } else {
      // 요청 설정 중 에러가 발생한 경우
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api; 