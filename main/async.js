import { dao } from '../node_modules/@speedingplanet/rest-server/src/daos.js';
// import { dao } from '@speedingplanet/rest-server';

const p = dao.findAllUsers();

/*
p.then( ( response ) => {
  console.log( `There are ${response.data.length} users` );
} );

p.then( ( { data } ) => {
  console.log( `There are ${data.length} users` );
} );
*/

p.then( ( { data: users } ) => {
  console.log( `There are ${users.length} users` );
} );

p.catch( ( error ) => {
  console.error( 'Problems!', error );
} );

async function getData() {
  try {
    const response = await dao.findAllUsers(); // yield
    console.log( `There are ${response.data.length} users` );
  } catch ( error ) {
    console.error( 'Problems!', error );
  }
}

console.log( 1 + 1 );

window.addEventListener( 'DOMContentLoaded', getData );

console.log( 2 + 2 );
