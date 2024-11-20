// 운동 카테고리 상수
export const EXERCISE_CATEGORIES = {
  UPPER_BODY: '상체',
  LOWER_BODY: '하체',
  CORE: '코어',
  CARDIO: '유산소'
};

// 기본 운동 목록
export const DEFAULT_EXERCISES = {
  [EXERCISE_CATEGORIES.UPPER_BODY]: ['팔굽혀펴기', '턱걸이', '벤치프레스', '숄더프레스'],
  [EXERCISE_CATEGORIES.LOWER_BODY]: ['스쿼트', '런지', '레그프레스', '데드리프트'],
  [EXERCISE_CATEGORIES.CORE]: ['플랭크', '싯업', '크런치', '레그레이즈'],
  [EXERCISE_CATEGORIES.CARDIO]: ['달리기', '자전거', '줄넘기', '수영']
}; 