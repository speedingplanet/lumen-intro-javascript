// Creating an array
let numbers = [1, 2, 3, 4, 5];
let numbersConstructor = new Array(1, 2, 3, 4, 5);
let numbersOf = Array.of(1, 2, 3, 4, 5);
let bigArray = new Array(1000); // 1000 empty elements in the array
let emptyArray = [];
let words = ['apples', 'peaches', 'bananas', 'raspberries', 'blueberries'];

// Accessing an array
// Arrays are indexed with 0
console.log(numbers[1]); // 2

for (let x = 0; x < numbers.length; x = x + 1) {
  console.log(numbers[x]);
}

for (let number of numbers) {
  console.log(number);
}

// slice(start, end)
// end is optional and exclusive
// ALWAYS returns an array
let someWords = words.slice(0, 2);

// Destructuring
let [firstWord, secondWord] = words;
let [a, b, , d, e] = words;

let wordOne = words[0];
let wordTwo = words[1];

function processEntry(keyValuePair) {
  let key = keyValuePair[0];
  let value = keyValuePair[1];
}

processEntry(['a', 'apple']);

function betterProcessEntry([key, value, ...theRest]) {
  // Whatever
}

betterProcessEntry(['a', 'apple', 'b', 'banana', 'c', 'cat', 'd', 'dog']);

let objectArray = [{ a: 'a' }, { b: 'b' }];
let shallowCopy = [...objectArray];
objectArray[0] === shallowCopy[0]; // true

// Only shallow copies here
let copyOfWords = [...words];
let copyOfWords2 = new Array(...words);
let copyOfWords3 = Array.of(...words);

function addThemAll(...args) {
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
}

addThemAll(1, 2, 3, 4, 5, 6, 7);

function buildASentence(word1, word2, word3) {}

buildASentence(...words);

// unshift for the front of the array
words.push('foo');
words.push('bar', 'baz');
let additionalWords = ['alpha', 'beta'];
words.push(...additionalWords);
words.push(additionalWords); // Not what we want, adds the array as a single element

// pop/shift to remove elements from the back/front of the array

// splice(start, replacementCount, replace, replace, replace) for the middle
words.splice(3, 1, 'huckleberries', 'gooseberries', 'some other kind of berry');
