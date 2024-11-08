import imageA from '../../../assets/images/a.jpg';
import imageB from '../../../assets/images/b.jpg';
import imageC from '../../../assets/images/c.jpg';

export const MENU_ITEMS = [
  { label: '설정', action: () => console.log('설정') },
  { label: '도움말', action: () => console.log('도움말') },
  { label: '피드백 보내기', action: () => console.log('피드백') },
  { label: '로그아웃', action: () => console.log('로그웃') },
];

export const STUDENTS = [
  { 
    id: 1, 
    src: imageA,
    name: '김민준',
    grade: '1학년 3반'
  },
  // ... 나머지 학생 데이터
]; 