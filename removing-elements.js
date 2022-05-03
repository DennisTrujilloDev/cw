// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
  return arr.filter((n, i) => i%2 == 0)
}
//Examples for i 
//[0,1,2,3,4,5] => [0,2,4]

//parametre array 
//return array 
//examples  [1,2,3,4] [2,4]
//psuedo 1. filter 