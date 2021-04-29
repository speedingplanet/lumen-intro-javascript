import { users } from '../../../node_modules/@speedingplanet/rest-server/index.js';
import { UsersTable } from './UsersTable.js';

/*
Import UsersTable, then...
Instantiate a new UsersTable
Pass in users as users, and an element in the HTML to render to
(hint: table-target, and check the HTML file)
Call render() on the created table
*/

let table = new UsersTable({
  users,
  renderTo: document.getElementById('table-target'),
});
table.render();

// Event Handlers
document
  .querySelector('#filter-button')
  .addEventListener('click', handleFilterButton);

function handleFilterButton() {
  let filterField = document.getElementById('filter-field').value;
  let filterText = document.getElementById('filter-text').value;

  // Move this logic to UsersTable.highlightUsers
  // Don't forget to INVOKE UsersTable.highlightUsers() here
  table.highlightUsers(filterField, filterText);
}
