import { users } from '../../../node_modules/@speedingplanet/rest-server/index.js';

/*
Import UsersTable, then...
Instantiate a new UsersTable
Pass in users as users, and an element in the HTML to render to
(hint: table-target, and check the HTML file)
Call render() on the created table
*/

// Event Handlers
document
  .querySelector('#filter-button')
  .addEventListener('click', handleFilterButton);

function handleFilterButton() {
  let filterField = document.getElementById('filter-field').value;
  let filterText = document.getElementById('filter-text').value;

  // Move this logic to UsersTable.highlightUsers
  // Don't forget to INVOKE UsersTable.highlightUsers() here
  document.querySelectorAll('tbody>tr').forEach((row) => {
    let id = row.dataset.rowId;
    if (_get(peopleById[id], filterField).includes(filterText)) {
      // row.classList.add('highlight');
      row.classList.add('bg-warning');
    } else {
      // row.classList.remove('highlight');
      row.classList.remove('bg-warning');
    }
  });
}
