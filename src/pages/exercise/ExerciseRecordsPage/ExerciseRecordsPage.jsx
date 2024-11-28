import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAllStudentRecords, getRecordDetails } from '../../../services/exerciseRecordService';
import { fetchStudents } from '../../../services/studentService';
import Header from '../../../components/common/Header/Header';
import MobileContainer from '../../../components/common/MobileContainer/MobileContainer';
import {
  Container,
  PageLayout,
  StudentListSection,
  StudentList,
  StudentItem,
  StudentInfo,
  StudentName,
  StudentGrade,
  RecordsSection,
  RecordsList,
  RecordItem,
  RecordSummary,
  NoRecords
} from './ExerciseRecordsPage.styles';

const ExerciseRecordsPage = () => {
  const navigate = useNavigate();
  const [selectedStudent, setSelectedStudent] = useState(null);

  // 학생 목록 조회
  const { data: students } = useQuery({
    queryKey: ['students'],
    queryFn: fetchStudents
  });

  // 선택된 학생의 모든 운동 기록 조회
  const { data: studentRecords, isLoading: isLoadingRecords } = useQuery({
    queryKey: ['studentRecords', selectedStudent?.id],
    queryFn: () => getAllStudentRecords(selectedStudent.id),
    enabled: !!selectedStudent?.id
  });

  // 날짜별, record id별로 기록 그룹화
  const groupedRecords = React.useMemo(() => {
    if (!studentRecords || !Array.isArray(studentRecords)) {
      return {};
    }
    
    return studentRecords.reduce((acc, record) => {
      const date = record.date.split('T')[0];
      if (!acc[date]) {
        acc[date] = {};
      }
      
      // record id별로 저장
      if (!acc[date][record.id]) {
        acc[date][record.id] = {
          id: record.id,
          created_at: record.created_at,
          exercise_orders: record.exercise_orders || {},
          exercises: record.exercises || []
        };
      }
      
      return acc;
    }, {});
  }, [studentRecords]);

  // 디버깅을 위한 useEffect 추가
  React.useEffect(() => {
    console.log('Raw student records:', studentRecords);
    console.log('Grouped records:', groupedRecords);
  }, [studentRecords, groupedRecords]);

  // 날짜 포맷팅 함수
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\. /g, '.').replace('.', '');
  };

  // 날짜 시간 포맷팅 함수
  const formatDateTime = (dateTimeStr) => {
    const date = new Date(dateTimeStr);
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).replace(/\. /g, '.').replace(/:/g, '.');
  };

  // 학생 선택 핸들러
  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  // 날짜 선택 핸들러
  const handleDateClick = async (date, recordId) => {
    try {
      const details = await getRecordDetails(recordId);
      navigate(`/exercise/records/${recordId}/details`, {
        state: {
          date,
          details,
          studentName: selectedStudent.name
        }
      });
    } catch (error) {
      console.error('운동 기록 상세 조회 실패:', error);
    }
  };

  // 기록 클릭 핸들러 수정
  const handleRecordClick = (record) => {
    console.log('Record data:', record);
    console.log('Exercise orders:', record.exercise_orders);
    
    navigate('/exercise/records/chart', {
      state: {
        selectedStudent,
        exerciseOrders: record.exercise_orders,
        created_at: record.created_at,
        recordId: record.id
      }
    });
  };

  return (
    <>
      <Header title="운동 기록 조회" />
      <MobileContainer>
        <Container>
        <PageLayout>
          <StudentListSection>
            <h2>학생 선택</h2>
            <StudentList>
              {students?.map((student) => (
                <StudentItem
                  key={student.id}
                  $isSelected={selectedStudent?.id === student.id}
                  onClick={() => handleStudentClick(student)}
                >
                  <StudentInfo>
                    <StudentName $isSelected={selectedStudent?.id === student.id}>
                      {student.name}
                    </StudentName>
                    <StudentGrade $isSelected={selectedStudent?.id === student.id}>
                      {student.grade}학년 {student.school_type}반
                    </StudentGrade>
                  </StudentInfo>
                </StudentItem>
              ))}
            </StudentList>
          </StudentListSection>

          <RecordsSection>
            {selectedStudent ? (
              <>
                <h2>{selectedStudent.name} 학생의 운동 기록</h2>
                {isLoadingRecords ? (
                  <div>운동 기록을 불러오는 중...</div>
                ) : Object.keys(groupedRecords).length > 0 ? (
                  <RecordsList>
                    {Object.entries(groupedRecords)
                      .sort(([dateA], [dateB]) => new Date(dateB) - new Date(dateA))
                      .map(([date, recordsById]) => (
                        <RecordItem key={date}>
                          <div style={{ 
                            fontSize: '1.2em', 
                            fontWeight: 'bold',
                            padding: '10px',
                            borderBottom: '1px solid #eee'
                          }}>
                            {formatDate(date)}
                          </div>
                          
                          {/* 해당 날짜의 record id별 기록들 */}
                          {Object.values(recordsById)
                            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                            .map(record => (
                              <RecordSummary
                                key={record.id}
                                onClick={() => handleRecordClick(record)}
                                style={{ cursor: 'pointer' }}
                              >
                                <div style={{ marginBottom: '15px' }}>
                                  <strong style={{ fontSize: '1.1em', color: '#333' }}>
                                    {formatDateTime(record.created_at)} 운동 기록
                                  </strong>
                                </div>
                                
                                {/* 운동 차수별 기록 */}
                                {Object.entries(record.exercise_orders || {}).map(([order, exercises]) => (
                                  <div key={order} style={{ 
                                    marginBottom: '15px', 
                                    padding: '10px', 
                                    backgroundColor: '#f5f5f5', 
                                    borderRadius: '5px' 
                                  }}>
                                    <strong style={{ color: '#1976d2' }}>{order} 운동</strong>
                                    <ul style={{ 
                                      listStyle: 'none', 
                                      padding: '10px 0', 
                                      margin: 0 
                                    }}>
                                      {Object.entries(exercises).map(([exerciseName, count]) => (
                                        <li key={exerciseName} style={{ 
                                          display: 'flex', 
                                          justifyContent: 'space-between',
                                          padding: '5px 0',
                                          borderBottom: '1px solid #eee'
                                        }}>
                                          <span>{exerciseName}</span>
                                          <span><strong>{count}</strong> 회</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                                
                                {/* 요약 정보 */}
                                <div style={{ 
                                  marginTop: '10px',
                                  padding: '10px',
                                  backgroundColor: '#e3f2fd',
                                  borderRadius: '5px',
                                  fontSize: '0.9em'
                                }}>
                                  <div style={{ marginBottom: '5px' }}>
                                    <strong>총 운동 종목:</strong> {
                                      Array.from(
                                        new Set(
                                          Object.values(record.exercise_orders || {})
                                            .flatMap(order => Object.keys(order))
                                        )
                                      ).length
                                    }개
                                  </div>
                                  <div>
                                    <strong>총 운동 차수:</strong> {
                                      Object.keys(record.exercise_orders || {}).length
                                    }회
                                  </div>
                                </div>
                              </RecordSummary>
                            ))}
                        </RecordItem>
                      ))}
                  </RecordsList>
                ) : (
                  <NoRecords>
                    {selectedStudent.name} 학생의 저장된 운동 기록이 없습니다.
                  </NoRecords>
                )}
              </>
            ) : (
              <NoRecords>학생을 선택해주세요.</NoRecords>
            )}
          </RecordsSection>
        </PageLayout>
      </Container>
    </MobileContainer>
    </>
  );
};

export default ExerciseRecordsPage; 