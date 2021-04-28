import { users } from '../../node_modules/@speedingplanet/rest-server/index.js';
import _orderBy from '../../node_modules/lodash-es/orderBy.js';

let lastSortField = '';
let lastSortDirection = 'asc';

let tbody = document.querySelector('tbody');
let people = users
  .filter((user) => user.userType === 'person')
  .map((person) => {
    let [firstName, lastName] = person.displayName.split(' ');
    return { ...person, firstName, lastName };
  });
renderTable(people);

// based on thirdVersion() in users-table-main.js
function renderTable(people = []) {
  let rows = people.map((person) => {
    let row = document.createElement('tr');
    let template = `
      <td>${person.firstName}</td>
      <td>${person.lastName}</td>
      <td>${person.address.city}</td>
      <td>${person.address.state}</td>
      `;
    row.innerHTML = template;
    return row;
  });

  // Note this change
  tbody.replaceChildren(...rows);
}

function sortTable(sortField) {
  let sortDirection = 'asc';
  if (sortField === lastSortField && lastSortDirection === 'asc') {
    sortDirection = 'desc';
  }
  people = _orderBy(people, sortField, sortDirection);
  lastSortDirection = sortDirection;
  lastSortField = sortField;
  renderTable(people, true);
}

function handleClickHeader(event) {
  sortTable(event.target.dataset.sortField);
}

document.querySelector('thead>tr').addEventListener('click', handleClickHeader);
