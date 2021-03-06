import { users } from '../../node_modules/@speedingplanet/rest-server/index.js';
import _orderBy from '../../node_modules/lodash-es/orderBy.js';

let lastSortField = '';
let lastSortDirection = 'asc';

let tbody = document.querySelector('tbody');
let people = users
  .filter((user) => user.userType === 'person')
  .map((person) => {
    let [firstName, lastName] = person.displayName.split(' ');
    // return { ...person, firstName: firstName, lastName: lastName };

    // Build a new person object with a firstName and lastName
    // Destructure it back out to remove the displayName property
    // (which we ignore)
    let { displayName, ...updatedPerson } = { ...person, firstName, lastName };
    return updatedPerson;
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
  renderTable(people);

  let sortHeader = document.querySelector(`th[data-sort-field="${sortField}"]`);
  let otherHeaders = document.querySelectorAll(
    `th:not([data-sort-field="${sortField}"])`
  );

  let columnText = sortHeader.innerHTML.trim();
  if (columnText.endsWith('⏫') || columnText.endsWith('⏬')) {
    columnText = columnText.slice(0, -1);
  }
  sortHeader.innerHTML = `${columnText} ${
    sortDirection === 'asc' ? '⏫' : '⏬'
  }`;

  otherHeaders.forEach((header) => {
    let columnText = header.innerHTML.trim();
    if (columnText.endsWith('⏫') || columnText.endsWith('⏬')) {
      columnText = columnText.slice(0, -1);
    }
    header.innerHTML = columnText;
  });
}

function handleClickHeader(event) {
  sortTable(event.target.dataset.sortField);
}

document.querySelector('thead>tr').addEventListener('click', handleClickHeader);
