const states = [ 'NJ', 'MA', 'CA', 'IL', 'FL' ];

// End of the array
states.push( 'WA', 'TX' );

// states is now one element shorter
const lastElement = states.pop();

// Beginning or front of the array
// states is another element shorter
const firstElement = states.shift();

states.unshift( firstElement, lastElement );

states[3] = 'AK';

// states.splice(start, length, replacement?);
// Delete two elements
states.splice( 1, 2 );

// Insert three elements at position 2
states.splice( 2, 0, 'AR', 'AZ', 'CO' );

// Delete one element at position 4
states.splice( 4, 1 );
