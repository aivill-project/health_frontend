export const prepareChartData = (rounds, exerciseNames) => {
  const sortedRounds = [...rounds].sort((a, b) => parseInt(a.round) - parseInt(b.round));
  
  return exerciseNames.map(exerciseName => {
    const dataPoint = { name: exerciseName };
    sortedRounds.forEach(round => {
      const exercise = round.exercises.find(e => e.name === exerciseName);
      dataPoint[`${round.round}차`] = exercise ? exercise.count : 0;
    });
    return dataPoint;
  });
};

export const CHART_COLORS = [
  '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
  '#FF9F40', '#FF6384', '#C9CBCF', '#4BC0C0', '#FF9F40'
]; 