let x = 1;
while ( x < 10 ) {
  // Whatever
  x = x + 1;
}

// Initialize your counter!
for ( let y = 0; y < 10; y++ ) {
  // Whatever
}

const obj = {
  a: 'apple',
  b: 'banana',
  c: 'cantaloupe',
  getA() {
    return this.a;
  },
};

// for-in for keys
for ( const key in obj ) {
  if ( typeof obj[key] === 'string' ) {
    console.log( `${key}` );
  } else {
    console.log( `Invoking ${key}:`, obj[key]() );
  }
}

const mapFruits = new Map();
mapFruits.set( 'a', 'apple' );
mapFruits.set( 'b', 'banana' );
mapFruits.set( 'c', 'cantaloupe' );

const fruits = [ 'apples', 'bananas', 'pears', 'oranges' ];

// for-of good for values
for ( const fruit of fruits ) {
  console.log( fruit );
}
