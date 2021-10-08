

let begin = [0,0];
let end = [];

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  // Your code in here ...
  end = begin;
  for (let index = 0; index < moves.length; index++) {
    let element = moves[index];
    if (element == 'north') {begin[1] = begin[1]+1}
    if (element == 'south') {begin[1] = begin[1]-1}
    if (element == 'east') {begin[0] = begin[0]+1}
    if (element == 'west') {begin[0] = begin[0]-1}
  
  }return end;
}
console.log(end);

finalPosition(moves);

console.log(end);