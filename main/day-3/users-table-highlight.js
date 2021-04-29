import { users } from '../../node_modules/@speedingplanet/rest-server/index.js';
import _orderBy from '../../node_modules/lodash-es/orderBy.js';
import _get from '../../node_modules/lodash-es/get.js';

let peopleById = {};
let people = users
  .filter((user) => user.userType === 'person')
  .map((person) => {
    let [firstName, lastName] = person.displayName.split(' ');
    // return { ...person, firstName: firstName, lastName: lastName };

    // Build a new person object with a firstName and lastName
    // Destructure it back out to remove the displayName property
    // (which we ignore)
    let { displayName, ...updatedPerson } = { ...person, firstName, lastName };
    peopleById[updatedPerson.id] = updatedPerson;
    return updatedPerson;
  });

/*
- When filterButton is clicked on
    - Get filter text out of filterText
    - Get filter field out of filterField

    - At what point can we add a class to the appropriate element
      to indicate a match for the filter?
      - "appropriate element" can be either the tr or the td, up to you

*/

let lastSortField = '';
let lastSortDirection = 'asc';

let tbody = document.querySelector('tbody');
renderTable(people);

// Event Handlers
document.querySelector('thead>tr').addEventListener('click', handleClickHeader);
document
  .querySelector('#filter-button')
  .addEventListener('click', handleFilterButton);

function handleFilterButton() {
  let filterField = document.getElementById('filter-field').value;
  let filterText = document.getElementById('filter-text').value;
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

// based on thirdVersion() in users-table-main.js
function renderTable(people = []) {
  let rows = people.map((person) => {
    let row = document.createElement('tr');
    row.setAttribute('data-row-id', person.id);
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
  if (document.getElementById('filter-text').value) handleFilterButton();
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
