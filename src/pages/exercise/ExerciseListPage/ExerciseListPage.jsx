import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExerciseCategory from '../../../components/exercise/ExerciseList/ExerciseCategory';
import SelectedExerciseList from '../../../components/exercise/ExerciseList/SelectedExerciseList';
import NextButton from '../../../components/exercise/ExerciseList/NextButton';
import Header from '../../../components/common/Header/Header';
import {
  Container,
  CategorySection,
} from '../../../components/exercise/ExerciseList/ExerciseList.styles';

const exerciseCategories = {
  '심폐지구력': [
      '10m왕복오래달리기',
      '15m왕복오래달리기',
      '팝스왕복오래달리기(초등15m, 중고등20m)',
      '오래달리기걷기(초등1000m, 중고 여1200m, 중고 남1600m)',
      '스텝검사'
    ],
    '근력': [
      '약력검사',
      '배근력'
    ],
    '근지구력': [
      '윗몸일으키기',
      '윗몸말아올리기',
      '팔굽혀펴기',
      'V자앉기'
    ],
    '유연성': [
      '앉아윗몸앞으로굽히기'
    ],
    '평형성': [
      '한발로중심잡기'
    ],
    '순발력': [
      '제자리멀리뛰기',
      '제자리높이뛰기',
      '50m 달리기'
    ],
    '민첩성': [
      '5m 왕복달리기',
      '7m 왕복달리기',
      '10m 왕복달리기',
      '스피드줄넘기',
      '스피드발차기(제미타)'
    ] 
};

const ExerciseListPage = () => {
  const navigate = useNavigate();

  const defaultSelectedExercises = [
    '10m왕복오래달리기',
    '배근력',
    '윗몸일으키기',
    '팔굽혀펴기',
    '앉아윗몸앞으로굽히기',
    '한발로중심잡기',
    '제자리멀리뛰기',
    '스피드줄넘기'
  ];

  const [selectedExercises, setSelectedExercises] = useState(defaultSelectedExercises);
  const [exerciseList, setExerciseList] = useState(exerciseCategories);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleExerciseToggle = (exercise) => {
    setSelectedExercises(prev => {
      if (prev.includes(exercise)) {
        return prev.filter(item => item !== exercise);
      }
      return [...prev, exercise];
    });
  };

  const handleRemoveExercise = (exercise) => {
    setSelectedExercises(prev => prev.filter(item => item !== exercise));
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

  const handleShowAddForm = () => {
    setShowAddForm(true);
  };

  const handleHideAddForm = () => {
    setShowAddForm(false);
  };

  const handleAddExercise = (category, newExercise) => {
    setExerciseList(prev => ({
      ...prev,
      [category]: [...prev[category], newExercise]
    }));
  };

  const handleRemoveCategoryExercise = (category, exercise) => {
    setExerciseList(prev => ({
      ...prev,
      [category]: prev[category].filter(item => item !== exercise)
    }));
    if (selectedExercises.includes(exercise)) {
      handleRemoveExercise(exercise);
    }
  };

  return (
    <>
      <Header title="운동 선택" />
      <Container>
        <SelectedExerciseList
          selectedExercises={selectedExercises}
          onRemoveExercise={handleRemoveExercise}
        />

        <CategorySection>
          {Object.entries(exerciseList).map(([category, exercises]) => (
            <ExerciseCategory
              key={category}
              category={category}
              exercises={exercises}
              selectedExercises={selectedExercises}
              onExerciseToggle={handleExerciseToggle}
              onShowAddForm={handleShowAddForm}
              showAddForm={showAddForm}
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