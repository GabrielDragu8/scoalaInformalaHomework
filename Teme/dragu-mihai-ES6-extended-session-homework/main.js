// Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

function sumNumbers (...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(sumNumbers(4,5,6));
console.log(sumNumbers(3, 2, 1));

// Write a function that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.

function sumNumbersOnly(...args) {
  return args.filter(arg => typeof arg === 'number')
  .reduce((total, number) => total + number, 0);
}

console.log(sumNumbersOnly(1, 2, '3', '4'));
console.log(sumNumbersOnly(7, 2, '12', '4'));

// Write a function that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).

function combineTwoArrys (firstArray, secondArray) {
  return [...firstArray, ...secondArray];
}

const first = [0, 1, 2, 3, 4];
const second = [5, 6, 7, 8, 9];

console.log(combineTwoArrys(first, second));

// Write a function that takes in any number of arrays as arguments and combines all of them into one array.


function combineMultipleArrays(...args) {
  return [].concat(...args);
}

const third = [10, 11, 12];

console.log(combineMultipleArrays(first, second, third));