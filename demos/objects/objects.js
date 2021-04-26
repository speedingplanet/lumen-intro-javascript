/* eslint-disable no-unused-vars, no-unused-expressions */
const person = {
  firstName: 'John',
  lastName: 'Paxton',
  city: 'Nutley',
  state: 'NJ',
  getState() {
    return this.state;
  },
  getCity: function() {
    return this.city;
  },
  add: ( x, y ) => x + y,
};

// Iteration possibilities
const keys = Object.keys( person );
const values = Object.values( person );

// entries [[key1, value1], [key2, value2]]
const entries = Object.entries( person );

Object.keys( person ).forEach( ( key ) => {
  console.log( `${key}: ${person[key]}` );
} );

// Object.keys() equivalent
for ( const key in person ) {
  // Whatever
}

const { firstName, lastName } = person;

const state = {
  aString: '',
  aNumber: 0,
  aFunction: function() {},
  anArrowFunction: () => {},
  anotherFunction() {},
  anotherObject: {
    innerObject: {
      reallyDeepObject: {
        kindOfRidiculousObject: {
          message: 'Hi',
        },
      },
    },
  },
  'something-complicated': 'value',
  'some spaces': 'value',
};

state['some spaces'];
state.aString;

// Identifiers: $, _, or alphabetical character, followed by $, _, alphanumeric
// $, _, $foo, _foo, foo, bar, baz, something_complicated;

const passedInConfiguration = {
  data: cities,
  color: 'blue',
  onClick: 'whatever',
  onHover: 'something Else',
};
const cityTable = new Table( passedInConfiguration );

// In Table
const defaults = {
  data: [],
  color: 'green',
  onClick: null,
  onHover: null,
  columns: [],
  otherThing: {},
};

const config = { ...defaults, ...passedInConfiguration };
