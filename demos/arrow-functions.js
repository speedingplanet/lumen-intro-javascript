/* eslint-disable no-unused-vars */
function addFunction( x, y ) {
  return x + y;
}

const addArrow = ( x, y ) => {
  return x + y;
};

const addArrowShort = ( x, y ) => x + y;

const timesTwo = ( x ) => x * 2;

function generatePersonFunction( firstName, lastName ) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

const generatePersonArrow = ( firstName, lastName ) => ( {
  firstName: firstName,
  lastName: lastName,
} );

const filter = ( value ) => ( value > 10 ? value : value + 10 );

// Terrible, but valid
// const x = x => x * x;

const car = {
  speed: 0,
  accelerate( amount ) {
    this.speed = this.speed + amount;
  },
  someOtherProperty: 'some value',
};

const carArrow = {
  speed: 0,
  accelerate: ( amount ) => {
    this.speed = ( this.speed || 0 ) + amount;
  },
};

const carArrowAccelerate = carArrow.accelerate;
const carAccelerate = car.accelerate;

// Global context!

const someObject = {
  someProperty: 'foo',
  someFunction() {
    function someInnerFunction() {
      console.log( this.someProperty );
    }
  },
};
