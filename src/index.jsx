import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import * as S from './components/ExerciseChart/styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ExerciseChart = () => {
  const location = useLocation();
  const { student, date, rounds } = location.state;
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (rounds && rounds.length > 0) {
      // 모든 운동 종류 추출
      const allExercises = [...new Set(
        rounds.flatMap(round => round.exercises.map(ex => ex.name))
      )];

      // 차수별 데이터 준비
      const datasets = rounds.map((round, index) => ({
        label: `${round.round}차`,
        data: allExercises.map(exerciseName => {
          const exercise = round.exercises.find(ex => ex.name === exerciseName);
          return exercise ? exercise.count : 0;
        }),
        backgroundColor: `hsla(${index * (360 / rounds.length)}, 70%, 50%, 0.5)`,
        borderColor: `hsla(${index * (360 / rounds.length)}, 70%, 50%, 1)`,
        borderWidth: 1
      }));

      setChartData({
        labels: allExercises,
        datasets
      });
    }
  }, [rounds]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${student.name} 학생의 운동 기록 (${date})`
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.StudentInfo>
          <S.StudentName>{student.name}</S.StudentName>
          <S.StudentGrade>{student.grade}</S.StudentGrade>
        </S.StudentInfo>
        <S.Date>{date}</S.Date>
      </S.Header>
      
      <S.ChartContainer>
        {chartData && <Bar data={chartData} options={options} />}
      </S.ChartContainer>

      <S.DataTable>
        <S.TableHeader>
          <tr>
            <th>운동</th>
            {rounds.map(round => (
              <th key={round.round}>{round.round}차</th>
            ))}
          </tr>
        </S.TableHeader>
        <S.TableBody>
          {chartData?.labels.map(exercise => (
            <tr key={exercise}>
              <td>{exercise}</td>
              {rounds.map(round => {
                const exerciseData = round.exercises.find(ex => ex.name === exercise);
                return (
                  <td key={round.round}>
                    {exerciseData ? exerciseData.count : 0}
                  </td>
                );
              })}
            </tr>
          ))}
        </S.TableBody>
      </S.DataTable>
    </S.Container>
  );
};

export default ExerciseChart; 