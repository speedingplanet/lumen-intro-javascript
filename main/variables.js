// ES 2015
const w = true;
let x = 10;

// Original JavaScript
var y = 'Hello';

w = false;

/*

  JavaScript primitives: strings, numbers, booleans
  Primitives are copied by value
  Reference types (objects, arrays, functions) are copied by reference

 */

function whatever() {
  for (var x = 0; x < 5; x++) {
    var y = x + 1;
  }
}

whatever();
console.log(y);
