// CHALLENGE
// This code takes in an array of possible voting stations, and then only returns the names of the stations that are appropriate.

// Array provided 
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// my code

function chooseStations(array) {
let results = [];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
    if (element[1] >= 20) {
      if (element[2] == "school" || element[2] ==  "community centre") {
          results.push(element[0]);
      }
    }
}
  console.log(results);
}



// function call
chooseStations(stations);
// outcome should be: ['Bright Lights Elementary', 'Moose Mountain Community Centre']