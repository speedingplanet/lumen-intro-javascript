let singleQuote = 'hello';

// prettier-ignore
let doubleQuote = "hello";

let backticks = `hello`;
let x = 5;
let y = 3;

let sumMessage = `The sum of x and y is ${x + y}`;

// Finding within a string
let searchTarget = 'The quick brown fox jumped over the lazy dog';
searchTarget.indexOf('fox'); // index of found or -1
searchTarget.indexOf('fox', 10); // index of found or -1, start at index 10
searchTarget.lastIndexOf('fox'); // index of found or -1, search from the end to the beginning
searchTarget.includes('dog'); // true or false
searchTarget.startsWith('The'); // true or false
searchTarget.endsWith('The'); // true or false
searchTarget.search('quick'); // index of found or -1

// Breaking up a string
searchTarget.slice(4, 9); // 'quick'
searchTarget.substring(4, 9); // 'quick'
