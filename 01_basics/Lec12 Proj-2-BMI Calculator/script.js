const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height} `;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight} `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    // write result in different way
    
    
    results.innerHTML = `<span>${bmi}</span>`;
    let bmiCategory = '';

    // Determine BMI weight category
    if (bmi < 18.6) {
      bmiCategory = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      bmiCategory = 'Normal Range';
    } else {
      bmiCategory = 'Overweight';
    }

    // Display the BMI result and weight category
    results.innerHTML = `<p>Your BMI: <span>${bmi}</span></p><p>Weight Category: <span>${bmiCategory}</span></p>`;
  }
});
    
        
