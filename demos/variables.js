/* eslint-disable no-unused-vars */
const aString = 'string';
const templateString = 'template string';
const aNumber = 10;
const aBoolean = true;
const anArray = [ 1, 2, 3, 4 ];
anArray.push( 5, 6, 7 );

const multiDimensionalArray = [
  [ 1, 2 ],
  [ 3, 4 ],
  [ 5, 6 ],
];
console.log( multiDimensionalArray[0][1] );

const anObject = {
  firstName: 'John',
  lastName: 'Paxton',
};

const aFunction = function( x, y ) {
  return x + y;
};

aFunction( 1, 2 );

const aRegularExpression = /[0-9]+/;

// eslint-disable-next-line prefer-regex-literals
const anotherRegExp = new RegExp( '[0-9]+' );

const today = new Date();
