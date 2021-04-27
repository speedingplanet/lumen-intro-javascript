export const x = 10;

// Syntactically incorrect
// export default const y = 20;
// Need two lines (with a variable)
// const y = 20;
// export default y;

// import {someVal} from './exports-default.js'
// import {someVal as otherVal} from './exports-default.js'
export const someVal = 20;

// export default someVal;
// export default function foo() {}
// export default class Book {}
// export default [1, 2, 3, someVal]

const person = {
  firstName: 'John',
  lastName: 'Paxton',
};

// import person from './exports-default.js'
// import thingy from './exports-default.js'
export default person;

// Mix and match
// import person, {someVal} from './exports-default.js'
