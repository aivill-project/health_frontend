export const EXERCISE_CATEGORIES = {
  CARDIO: '심폐지구력',
  STRENGTH: '근력',
  ENDURANCE: '근지구력',
  FLEXIBILITY: '유연성',
  BALANCE: '평형성',
  POWER: '순발력',
  AGILITY: '민첩성'
};

export const CATEGORY_LIST = Object.values(EXERCISE_CATEGORIES);

export const isValidCategory = (category) => {
  return Object.values(EXERCISE_CATEGORIES).includes(category);
}; 