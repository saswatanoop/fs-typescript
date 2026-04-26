
type bmiResult = "Underweight range" | "Normal range" | "Overweight range" | "Obese range";

const calculateBmi = (height: number, weight: number): bmiResult => {
  const heightInMeters = height / 100;
  const bmi = (weight) / (heightInMeters * heightInMeters);

  if (bmi < 18.5) {
    return "Underweight range";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal range";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight range";
  } else {
    return "Obese range";
  }

}


console.log(calculateBmi(180, 74))