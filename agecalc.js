// Define a function called ageCalculator. This function should take 3 parameters:

// name – a string representing someone's name
// yearOfBirth – a number representing their year of birth
// currentYear – a number representing the current year




function ageCalculator(name, yob, cy) {
  let age = 0;
  for (let index = yob; index < cy; index++) {
    age++
  }

  //console.log(name+" is "+age+" years old.");
  return name + " is " + age + " years old.";

}




ageCalculator("Suzie", 1983, 2015);
// "Suzie is 32 years old."