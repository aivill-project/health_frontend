import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchExercises, addExercise, removeExercise } from '../../../services/exerciseService';
import ExerciseCategory from '../../../components/exercise/ExerciseList/ExerciseCategory';
import SelectedExerciseList from '../../../components/exercise/ExerciseList/SelectedExerciseList';
import NextButton from '../../../components/exercise/ExerciseList/NextButton';
import Header from '../../../components/common/Header/Header';
import {
  Container,
  CategorySection,
} from '../../../components/exercise/ExerciseList/ExerciseList.styles';

const ExerciseListPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [activeAddFormCategory, setActiveAddFormCategory] = useState(null);

  // 운동 목록 조회
  const { data: exerciseList, isLoading, error } = useQuery({
    queryKey: ['exercises'],
    queryFn: fetchExercises,
    staleTime: 0, // 항상 최신 데이터 사용
    cacheTime: 0  // 캐시 사용하지 않음
  });

  // 운동 추가 mutation
  const addExerciseMutation = useMutation({
    mutationFn: ({ category, name }) => addExercise(category, name),
    onSuccess: () => {
      // 운동 추가 성공 시 목록 갱신
      queryClient.invalidateQueries(['exercises']);
      setActiveAddFormCategory(null);
    },
    onError: (error) => {
      console.error('운동 추가 실패:', error);
      alert('운동 추가에 실패했습니다.');
    }
  });

  // 운동 삭제 mutation
  const removeExerciseMutation = useMutation({
    mutationFn: (name) => removeExercise(name),
    onSuccess: () => {
      // 운동 삭제 성공 시 목록 갱신
      queryClient.invalidateQueries(['exercises']);
    }
  });

  const handleExerciseToggle = (exerciseName) => {
    setSelectedExercises(prev => {
      if (prev.includes(exerciseName)) {
        return prev.filter(name => name !== exerciseName);
      }
      return [...prev, exerciseName];
    });
  };

  const handleRemoveExercise = (exerciseName) => {
    setSelectedExercises(prev => prev.filter(name => name !== exerciseName));
  };

  const handleNext = () => {
    if (selectedExercises.length === 0) {
      alert('운동을 하나 이상 선택해주세요.');
      return;
    }

    navigate('/student-select', {
      state: { 
        selectedExercises: selectedExercises
      }
    });
  };

  const handleShowAddForm = (category) => {
    setActiveAddFormCategory(category);
  };

  const handleHideAddForm = () => {
    setActiveAddFormCategory(null);
  };

  const handleAddExercise = (category, newName) => {
    if (!newName.trim()) {
      alert('운동 이름을 입력해주세요.');
      return;
    }

    console.log('운동 추가 시도:', { category, name: newName });
    
    addExerciseMutation.mutate({ 
      category, 
      name: newName.trim() 
    }, {
      onSuccess: () => {
        handleHideAddForm();
      }
    });
  };

  const handleRemoveCategoryExercise = (category, exerciseId) => {
    removeExerciseMutation.mutate(exerciseId);
    // exerciseId에 해당하는 운동의 이름을 찾아서 선택 목록에서도 제거
    const exercise = exerciseList[category]?.find(e => e.id === exerciseId);
    if (exercise && selectedExercises.includes(exercise.name)) {
      handleRemoveExercise(exercise.name);
    }
  };

  // 데이터 구조 확인을 위한 로그
  console.log('Exercise List Data:', exerciseList);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다: {error.message}</div>;

  return (
    <>
      <Header title="운동 선택" />
      <Container>
        <SelectedExerciseList
          selectedExercises={selectedExercises}
          onRemoveExercise={handleRemoveExercise}
        />

        <CategorySection>
          {exerciseList && Object.entries(exerciseList).map(([category, exercises]) => (
            <ExerciseCategory
              key={category}
              category={category}
              exercises={exercises}
              selectedExercises={selectedExercises}
              onExerciseToggle={handleExerciseToggle}
              onShowAddForm={handleShowAddForm}
              showAddForm={activeAddFormCategory === category}
              onHideAddForm={handleHideAddForm}
              onAddExercise={handleAddExercise}
              onRemoveExercise={handleRemoveCategoryExercise}
            />
          ))}
        </CategorySection>

        <NextButton 
          selectedCount={selectedExercises.length}
          onClick={handleNext}
          disabled={selectedExercises.length === 0}
        />
      </Container>
    </>
  );
};

export default ExerciseListPage;