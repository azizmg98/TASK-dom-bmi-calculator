function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let bmi = weight/(height/100) ** 2;

  if (bmi < 18.5) {
    alert("You are underweight!")
  } else if (bmi >= 18.5 && bmi <= 24.9){
    alert("Your weight is healthy!")
  } else if (bmi >= 20.0 && bmi <= 29.9){
    alert("You are overweight!")
  } else {
    alert("You are obese!")
  }

  if ((age >= 19 && age <= 24) && (BMI >=19 && BMI <= 24)) {

  } else if ((age >= 25 && age <= 34) && (BMI >=20 && BMI <= 25)) {

  } else if ((age >= 35 && age <= 44) && (BMI >=21 && BMI <= 26)) {

  } else if ((age >= 45 && age <= 54) && (BMI >=22 && BMI <= 27)) {

  } else if ((age >= 55 && age <= 64) && (BMI >=23 && BMI <= 28)) {
    
  } else if ((age >= 65) && (BMI >=24 && BMI <= 29)) {

  }
}
