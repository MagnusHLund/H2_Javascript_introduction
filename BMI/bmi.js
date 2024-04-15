const output = document.getElementById('output')
const weight = document.getElementById('weight')
const height = document.getElementById('height')

function calculateBmi() {
  const heightInMeters = height.value / 100
  const weightInKilo = weight.value
  const result = weightInKilo / (heightInMeters * heightInMeters)
  output.innerHTML = `Your BMI is: ${Math.round(result * 100) / 100}`
}
