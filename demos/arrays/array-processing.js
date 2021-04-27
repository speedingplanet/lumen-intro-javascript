let words = ['apples', 'peaches', 'bananas', 'raspberries', 'blueberries'];

for (;;) {
  break;
}

function forEachFunction(word, index, originalArray) {
  if (word === 'peaches') return;
  console.log('Current word is', word);
}

words.forEach(forEachFunction);

// (item, index, array) => {}
words.forEach(function (word, index, originalArray) {
  if (word === 'peaches') return;
  console.log('Current word is', word);
});

// if the function ever returns true, results is true, otherwise false
let results = words.some((word, index) => {
  // Continues as long as this function returns falsy (false-like)
  // return word === 'bananas';
  console.log(word);
  // implicitly return undefined
});

// if the function ever returns false, results is false, otherwise true
results = words.every((word) => {
  console.log(word); // prints apples, exits, if there's no return statement
  // return word.length > 3;
});

let wordsWithA = words.filter((word) => {
  if (word.includes('a')) {
    return true;
  } else {
    return false;
  }
});

words
  .filter((word) => word.includes('a'))
  .filter((word) => word.includes('es'));

wordsWithA = words.filter((word) => word.includes('a') && word.includes('es'));

// Chaining
// word.toUpperCase().split(' ').map().join(' ')
// words.map().filter().map()

let firstMatch = words.find((word) => word.includes('ies')); // 'raspberries'
let firstMatchIndex = words.findIndex((word) => word.includes('ies')); // 3

/*
if (word.includes('es')) {
  return index;
} else {
  return false
}
*/

let numbers = [1, 2, 3, 4, 5, 6];
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

let matchedIndexes = words
  .map((word, index) => (word.includes('es') ? index : false)) // [0, 1, false, 3, 4];
  .filter((index) => index || index === 0);

let betterMatchedIndexes = words.flatMap((word, index) =>
  word.includes('es') ? [index] : []
);

let reducedIndexes = words.reduce(
  (accumulator, currentValue, index) =>
    currentValue.includes('es') ? [...accumulator, index] : acc,
  []
);
