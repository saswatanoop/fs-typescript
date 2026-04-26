interface exerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
};

const calculateExercises = (exerciseHours: number[], target: number): exerciseResult => {
  const periodLength = exerciseHours.length;
  const trainingDays = exerciseHours.filter(hour => hour > 0).length;
  const average = exerciseHours.reduce((a, b) => a + b, 0) / periodLength;
  const success = average >= target;
  
  let rating: number;
  let ratingDescription: string;  
  if (average >= target) {
    rating = 3;
    ratingDescription = "Great job! You've met your target.";
  } else if (average >= target * 0.75) {
    rating = 2;
    ratingDescription = "Not bad, but there's room for improvement.";
  } else {
    rating = 1;
    ratingDescription = "You need to exercise more to meet your target.";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  };
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));  