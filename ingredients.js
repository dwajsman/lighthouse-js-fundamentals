const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) { 
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (let index = 0; index < ingredients.length; index++) {
  console.log(ingredients[index]);
  
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
let j = ingredients.length - 1;
while (j >= 0) { 
  console.log(ingredients[j]);
  j--;
}