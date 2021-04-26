const states = [ 'NJ', 'MA', 'CA', 'IL', 'FL' ];

// Iterator functions usually take a callback/predicate with this signature
// (item, index, array) => void
states.forEach( ( item, index, array ) => {
  console.log( `${item} can be found at index ${index}.` );
} );

for (let x = 0; x < states.length; x++) {
  console.log(states[x]);
  if (/* some condition */) {
    break;
  }
}

// Return false all the way through, some() returns false
// Return true internally, break, and some() returns true
states.some((item, index, array) => {
  if (/* some condition */) {
    // Keep looping
    return false;
  } else {
    // Stop looping
    return true;
  }
});

states.every((a) => {
  if (/* some condition */) {
    // Keep looping, if this never returns false, every() returns true
    return true;
  } else {
    // Stop looping, every() also returns false
    return false;
  }
});

let mappedArray = states.map((state) => state.toLowerCase());

let people = [
  {
    firstName: 'John',
    lastName: 'Paxton',
    state: 'NJ'
  },
  {
    firstName: 'Dann',
    lastName: 'Russo',
    state: 'MA'
  }
];

// Bad, modifies original values
let mappedPeople = people.map(person => {
  person.state = person.state.toLowerCase();
  return person;
});

// Better
let mappedPeople = people.map(person => {
  // Shallow copy!
  let copiedPerson = {...person};
  copiedPerson.state = copiedPerson.state.toLowerCase();
  return copiedPerson;
});

