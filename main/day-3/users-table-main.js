import { users } from '../../node_modules/@speedingplanet/rest-server/index.js';

console.log('users:', users);

/*
  Render the users who are people to the table body
  Get a reference to the tbody
  Filter the users for userType === 'person'
  Iterate over the users array
  Generate a table row <tr></tr>
  Print firstName, lastName, address.city, and address.state, each as a td cell <td></td>
  (Get firstName and lastName from displayName)
*/
