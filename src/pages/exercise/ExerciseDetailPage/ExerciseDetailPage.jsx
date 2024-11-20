import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header/Header';
import {
  Container,
  StudentProfileCard,
  StudentImage,
  StudentInfo,
  StudentName,
  StudentClass,
  StudentGrade,
  DateInputWrapper,
  StyledDateInput,
  ExerciseSection,
  ExerciseSectionTitle,
  ExerciseList,
  ExerciseItem,
  ExerciseName,
  ExerciseInputWrapper,
  ExerciseUnit,
  ButtonContainer,
  NextButton,
  Form,
  FormGroup,
  Label,
  Select,
  SelectWrapper,
  AddButton,
  StyledOrderSelect,
  OrderSelectWrapper,
} from '../../../components/exercise/ExerciseDetail/ExerciseDetail.styles';
import defaultProfile from '../../../assets/images/person.jpg';
import { FaPlus } from 'react-icons/fa';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ExerciseDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedStudent, selectedExercises } = location.state || {};
  const [selectedExercise, setSelectedExercise] = useState('');
  const [exerciseOrder, setExerciseOrder] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [exercises, setExercises] = useState([]);

  console.log('Received data:', {
    student: selectedStudent,
    exercises: selectedExercises
  });

  // 날짜를 yyyy-MM-dd 형식으로 변환하는 함수
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // selectedDate 상태를 여기로 이동
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));

  // 날짜 변경 핸들러
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const [exerciseCount, setExerciseCount] = useState('1');
  const [maxExerciseCount, setMaxExerciseCount] = useState(1);
  
  // 초기 상태를 1차수만 가지도록 수정
  const [savedExerciseCounts, setSavedExerciseCounts] = useState(() => ({
    1: selectedExercises.reduce((acc, exercise) => ({
      ...acc,
      [exercise]: ''
    }), {})
  }));
  
  // 현재 입력 중인 운동 횟수 (1차수의 초기값)
  const [currentExerciseCounts, setCurrentExerciseCounts] = useState(
    selectedExercises.reduce((acc, exercise) => ({
      ...acc,
      [exercise]: ''
    }), {})
  );

  // 차수별 입력 완료 상태를 관리하는 state 추가
  const [completedOrders, setCompletedOrders] = useState({});

  // handleCountChange 함수 수정
  const handleCountChange = (exercise, value) => {
    setCurrentExerciseCounts(prev => {
      const newCounts = {
        ...prev,
        [exercise]: value
      };
      
      // 현재 차수의 모든 운동이 입력되었는지 확인
      const isCompleted = selectedExercises.every(ex => 
        newCounts[ex] !== '' && newCounts[ex] !== '0'
      );
      
      // 완료 상태 업데이트
      setCompletedOrders(prev => ({
        ...prev,
        [currentOrder]: isCompleted
      }));
      
      return newCounts;
    });
  };

  const handleExerciseCountChange = (e) => {
    const newCount = e.target.value;
    
    // 현재 차수의 데이터 저장
    setSavedExerciseCounts(prev => ({
      ...prev,
      [exerciseCount]: { ...currentExerciseCounts }
    }));
    
    // 새로운 차수로 변경
    setExerciseCount(newCount);
    
    // 새로운 차수의 저장된 데이터 불러오기
    const savedData = savedExerciseCounts[newCount] || {};
    setCurrentExerciseCounts(
      selectedExercises.reduce((acc, exercise) => ({
        ...acc,
        [exercise]: savedData[exercise] || ''  // undefined 대신 빈 문자열 사용
      }), {})
    );
  };

  const handleAddExerciseCount = () => {
    const newCount = maxExerciseCount + 1;
    setMaxExerciseCount(newCount);
    setSavedExerciseCounts(prev => ({
      ...prev,
      [newCount]: {}
    }));
  };

  // 운동차수 상태 추가
  const [currentOrder, setCurrentOrder] = useState('1');
  
  // 각 차수별 운동 횟수를 저장할 상태
  const [orderExerciseCounts, setOrderExerciseCounts] = useState({});

  // 운동차수 변경 핸들러
  const handleOrderChange = (e) => {
    const newOrder = e.target.value;
    
    if (currentOrder) {
      // 현재 차수의 데이터 저장
      setOrderExerciseCounts(prev => ({
        ...prev,
        [currentOrder]: { ...currentExerciseCounts }
      }));
    }
    
    // 새로운 차수로 변경
    setCurrentOrder(newOrder);
    
    // 새로운 차수의 저장된 데이터 불러오기 또는 초기화
    if (newOrder) {
      const savedData = orderExerciseCounts[newOrder] || {};
      setCurrentExerciseCounts(
        selectedExercises.reduce((acc, exercise) => ({
          ...acc,
          [exercise]: savedData[exercise] || ''
        }), {})
      );
    }
  };

  // 운동차수 추가 핸들러
  const handleAddOrder = () => {
    const newCount = maxExerciseCount + 1;
    setMaxExerciseCount(newCount);
    setSavedExerciseCounts(prev => ({
      ...prev,
      [newCount]: selectedExercises.reduce((acc, exercise) => ({
        ...acc,
        [exercise]: ''
      }), {})
    }));
  };

  // 다음으로 버튼 핸들러 수정
  const handleNext = () => {
    // 현재 차수의 데이터도 저장
    const finalOrderCounts = {
      ...orderExerciseCounts,
      [currentOrder]: { ...currentExerciseCounts }
    };

    navigate('/exercise/chart', {
      state: {
        selectedStudent,
        selectedExercises,
        selectedDate,
        exerciseOrders: finalOrderCounts,
        isViewMode: false
      }
    });
  };

  // 선택된 운동과 운동 기록 횟수를 관리하는 state 추가
  const [exerciseCounts, setExerciseCounts] = useState({});

  // 운동 선택 핸들러 추가
  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
  };

  return (
    <>
      <Header title="운동 기록" />
      <Container>
        <StudentProfileCard>
          <StudentImage 
            src={selectedStudent?.profileImage || defaultProfile} 
            alt={selectedStudent?.name}
            onError={(e) => {
              e.target.src = defaultProfile;
            }}
          />
          <StudentInfo>
            <StudentName>
              {selectedStudent?.name}
              <StudentGrade>{selectedStudent?.grade}학년</StudentGrade>
            </StudentName>
            <StudentClass>{selectedStudent?.school_type}반</StudentClass>
          </StudentInfo>
        </StudentProfileCard>

        <Form>
          <FormGroup>
            <Label>날짜</Label>
            <DateInputWrapper>
              <StyledDateInput
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </DateInputWrapper>
          </FormGroup>

          <OrderSelectWrapper>
            <Label>운동 차수 *</Label>
            <StyledOrderSelect
              value={currentOrder}
              onChange={handleOrderChange}
              required
            >
              {Array.from({ length: maxExerciseCount }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}차 {completedOrders[num] ? '✓' : ''}
                </option>
              ))}
            </StyledOrderSelect>
            <AddButton size="small" onClick={handleAddOrder}>
              <AddIcon fontSize="small" />
            </AddButton>
          </OrderSelectWrapper>
        </Form>

        <ExerciseSection>
          <ExerciseSectionTitle>{currentOrder}차</ExerciseSectionTitle>
          <ExerciseList>
            {selectedExercises.map((exercise, index) => (
              <ExerciseItem 
                key={index}
                selected={selectedExercise === exercise}
                onClick={() => handleExerciseSelect(exercise)}
              >
                <ExerciseName selected={selectedExercise === exercise}>
                  {exercise}
                </ExerciseName>
                <ExerciseInputWrapper>
                  <input
                    type="number"
                    min="0"
                    value={currentExerciseCounts[exercise] || ''}
                    onChange={(e) => handleCountChange(exercise, e.target.value)}
                    placeholder="0"
                  />
                  <ExerciseUnit>회</ExerciseUnit>
                </ExerciseInputWrapper>
              </ExerciseItem>
            ))}
          </ExerciseList>
        </ExerciseSection>

        <ButtonContainer>
          <NextButton 
            onClick={handleNext}
            disabled={!currentOrder} // 차수 선택이 안 되어있으면 비활성화
          >
            다음으로
          </NextButton>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default ExerciseDetailPage;
