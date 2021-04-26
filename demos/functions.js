/* eslint-disable no-unused-vars */

basicAdd();

// Function declaration: hoisted
function basicAdd() {
  return 2 + 2;
}

// Function expression: not hoisted
const assignedAdd = function() {
  return 2 + 2;
};

const otherAdd = basicAdd;

function add( x, y ) {
  return x + y;
}

// Default parameter values
function addDefaults( x = 0, y = 10 ) {
  return x + y;
}

// Allowed
addDefaults( 1, 2, 3, 4, 5 );
addDefaults( undefined, 5 );
addDefaults( 1 );
addDefaults();

const defaultConfig = { x: 0, y: 10 };
function foo( config ) {
  const args = Object.assign( {}, defaultConfig, config );

  // Same as the line above
  const betterArgs = { ...defaultConfig, ...config };
  return args.x + args.y;
}

foo( { y: 8 } );

function oldAddDefaults( x, y ) {
  if ( x === undefined ) {
    x = 0;
  }

  if ( y === undefined ) {
    y = 0;
  }

  return x + y;
}

// Works
addRest( 1, 2, 3, 4, 5 );

// Rest parameters
// The "rest" of the values
function addRest( x = 0, y = 0, ...otherParams ) {
  console.log( 'Other params: ', otherParams );
  let total = 0;
  for ( const x of otherParams ) {
    total = total + x;
  }
  return x + y + total;
}

function getAllParameters( ...foo ) {
  // params is an array of all arguments
}

getAllParameters( 1, 2, 3 );
getAllParameters( 'John', 30, true, [ 'a', 'b', 'c' ] );

const addRestRef = addRest;
addRestRef( 1, 2, 3, 4, 5 );

function addAll( ...numbers ) {
  let total = 0;
  for ( const x of numbers ) {
    total = total + x;
  }
  return total;
}

addAll( 1, 2, 3, 4, 5 );

function overloaded( x, y ) {
  if ( typeof x === 'string' ) {
    // do this
  } else if ( typeof x === 'number' ) {
    // do something else
  }
}

function getGreeter() {
  return function() {
    console.log( 'Greetings!' );
  };
}

const greeter = getGreeter();

const getCustomGreeter = function( name ) {
  return function() {
    console.log( 'Greetings,', name );
  };
};

// Flow
// TypeScript

const customGreeter = getCustomGreeter( 'John' );
// customGreeter();

// Don't do this. Though it is valid syntactically
function wayOuter() {
  function outer() {
    function inner() {
      function wayInner() {}
    }
  }
}
