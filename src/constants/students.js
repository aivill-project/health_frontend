import personImage from '../assets/images/person.jpg';

export const STUDENTS = [
  {
    id: 1,
    name: '김민준',
    grade: 1,
    class: 1,
    profileImage: '/images/students/a.jpg'
  },
  {
    id: 2,
    name: '이서연',
    grade: 1,
    class: 1,
    profileImage: '/images/students/b.jpg'
  },
  {
    id: 3,
    name: '박지호',
    grade: 2,
    class: 1,
    profileImage: '/images/students/c.jpg'
  },
  {
    id: 4,
    name: '정지원',
    grade: 3,
    class: 1,
    profileImage: '/images/students/d.jpg'
  },
  {
    id: 5,
    name: '최예린',
    grade: 1,
    class: 1,
    profileImage: personImage
  },
  {
    id: 6,
    name: '강현우',
    grade: 2,
    class: 1,
    profileImage: personImage
  },
  {
    id: 7,
    name: '윤서진',
    grade: 2,
    class: 1,
    profileImage: personImage
  },
  {
    id: 8,
    name: '임도현',
    grade: 3,
    class: 1,
    profileImage: personImage
  },
  {
    id: 9,
    name: '한소희',
    grade: 1,
    class: 1,
    profileImage: personImage
  },
  {
    id: 10,
    name: '송민석',
    grade: 3,
    class: 1,
    profileImage: personImage
  }
];

export const DEFAULT_STUDENT_IMAGE = personImage;

export const GRADE_OPTIONS = ['1학년', '2학년', '3학년'];

export const STUDENT_INITIAL_VALUES = {
  name: '',
  grade: '1학년',
  image: DEFAULT_STUDENT_IMAGE
}; 