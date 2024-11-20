import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header/Header';
import {
  Container,
  StudentProfile,
  StudentImage,
  StudentInfo,
  StudentName,
  StudentClass,
  DateInfo,
  ChartContainer,
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
  ContentWrapper,
  ExerciseInfo,
  ExerciseDetail,
  ExerciseLabel,
  ExerciseValue,
  BackButton,
  ButtonContainer,
  SaveButton
} from '../../../components/exercise/ExerciseChart/ExerciseChart.styles';
import defaultProfile from '../../../assets/images/person.jpg';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { useMutation } from '@tanstack/react-query';
import { saveExerciseRecord } from '../../../services/exerciseRecordService';

const ExerciseChartPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    selectedStudent, 
    selectedExercises, 
    selectedDate, 
    exerciseOrders,
    isViewMode = true 
  } = location.state || {};

  console.log('Received data in chart page:', {
    selectedExercises,
    exerciseOrders
  });

  // 데이터 구조 확인
  console.log('Received chart data:', {
    selectedStudent,
    selectedExercises,
    selectedDate,
    exerciseOrders,
    isViewMode
  });

  // 차트 데이터 가공
  const chartData = Object.entries(exerciseOrders).map(([order, counts]) => ({
    name: `${order}차`,
    ...counts
  }));

  const saveRecordMutation = useMutation({
    mutationFn: saveExerciseRecord,
    onSuccess: () => {
      alert('운동 기록이 저장되었습니다.');
      navigate('/exercise/records', {
        state: { selectedStudent },
        replace: true
      });
    },
    onError: (error) => {
      alert('저장 실패: ' + error.message);
    }
  });

  const handleSaveRecord = () => {
    const recordData = {
      student_id: selectedStudent.student_id,
      date: selectedDate,
      exercises: selectedExercises,
      exercise_orders: exerciseOrders
    };
    saveRecordMutation.mutate(recordData);
  };

  return (
    <>
      <Header title="운동 기록 차트" />
      <Container>
        <StudentProfile>
          <StudentImage 
            src={selectedStudent?.profileImage || defaultProfile} 
            alt={selectedStudent?.name}
            onError={(e) => {
              e.target.src = defaultProfile;
            }}
          />
          <StudentInfo>
            <StudentName>{selectedStudent?.name}</StudentName>
            <StudentClass>{selectedStudent?.grade}학년 {selectedStudent?.school_type}반</StudentClass>
          </StudentInfo>
        </StudentProfile>

        <DateInfo>
          {selectedDate}
        </DateInfo>

        <ExerciseInfo>
          <ExerciseDetail>
            <ExerciseLabel>총 운동 종목</ExerciseLabel>
            <ExerciseValue>{selectedExercises.length}개</ExerciseValue>
          </ExerciseDetail>
          <ExerciseDetail>
            <ExerciseLabel>총 운동 차수</ExerciseLabel>
            <ExerciseValue>{Object.keys(exerciseOrders).length}회</ExerciseValue>
          </ExerciseDetail>
        </ExerciseInfo>

        <ContentWrapper>
          <ChartContainer>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart 
                data={chartData}
                margin={{
                  top: 20,
                  right: 15,
                  left: 10,
                  bottom: 5
                }}
                barSize={25}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name"
                  fontSize={11}
                />
                <YAxis fontSize={11} />
                <Tooltip />
                <Legend 
                  wrapperStyle={{
                    fontSize: '9px',
                    paddingTop: '6px',
                  }}
                  iconSize={5}
                  iconType="rect"
                  align="center"
                  verticalAlign="bottom"
                  formatter={(value) => {
                    return <span style={{ 
                      display: 'inline-block', 
                      width: '35px',
                      textAlign: 'left',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      marginLeft: '2px'
                    }}>
                      {value}
                    </span>;
                  }}
                  layout="horizontal"
                  payload={selectedExercises.map((exercise, index) => ({
                    value: exercise,
                    type: 'rect',
                    id: exercise,
                    color: `hsl(${(index * 360) / selectedExercises.length}, 70%, 50%)`,
                  }))}
                />
                {selectedExercises.map((exercise, index) => (
                  <Bar
                    key={exercise}
                    dataKey={exercise}
                    name={exercise}
                    fill={`hsl(${(index * 360) / selectedExercises.length}, 70%, 50%)`}
                    radius={[4, 4, 0, 0]}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <TableContainer>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>운동 종목</TableHeaderCell>
                  {Object.keys(exerciseOrders).map(order => (
                    <TableHeaderCell key={order}>{order}차</TableHeaderCell>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedExercises.map((exercise) => (
                  <TableRow key={exercise}>
                    <TableCell>{exercise}</TableCell>
                    {Object.entries(exerciseOrders).map(([order, counts]) => (
                      <TableCell key={order}>
                        {counts[exercise] || 0}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ContentWrapper>

        {!isViewMode && (
          <ButtonContainer>
            <SaveButton onClick={handleSaveRecord} disabled={saveRecordMutation.isPending}>
              {saveRecordMutation.isPending ? '저장 중...' : '운동 기록 저장'}
            </SaveButton>
          </ButtonContainer>
        )}
      </Container>
    </>
  );
};

export default ExerciseChartPage;