const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight / Math.pow(height, 2)
}
function getBMIMeaning(weight, height) {
  const bmiValue = calculateBMI(weight, height)
  console.log(bmiValue)
  if (bmiValue < 18.5) return 'Underweight'
  else if (bmiValue >= 18.5 && bmiValue <= 24.9) return 'Normal weight'
  else return 'Overweight'
}
module.exports = getBMIMeaning
