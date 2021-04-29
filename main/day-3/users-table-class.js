import { users } from '../../node_modules/@speedingplanet/rest-server/index.js';
import { UsersTable } from './UsersTable.js';

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
  table.highlightUsers(filterField, filterText);
}
