import { users } from '../../node_modules/@speedingplanet/rest-server/index.js';
import lodashGet from '../../node_modules/lodash-es/get.js';

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

let tbody = document.querySelector('tbody');
// firstVersion();
// secondVersion();
// thirdVersion();
fourthVersion();

function firstVersion() {
  users
    .filter((user) => user.userType === 'person')
    .forEach((user) => {
      let [firstName, lastName] = user.displayName.split(' ');
      let row = document.createElement('tr');
      let cell = document.createElement('td');
      let cells = [cell, cell.cloneNode(), cell.cloneNode(), cell.cloneNode()];
      cells[0].textContent = firstName;
      cells[1].textContent = lastName;
      cells[2].textContent = user.address.city;
      cells[3].textContent = user.address.state;
      row.append(...cells);
      tbody.append(row);
    });
}

function secondVersion() {
  let rows = users
    .filter((user) => user.userType === 'person')
    .map((user) => {
      let [firstName, lastName] = user.displayName.split(' ');
      let row = document.createElement('tr');
      let cell = document.createElement('td');
      let cells = [cell, cell.cloneNode(), cell.cloneNode(), cell.cloneNode()];
      cells[0].textContent = firstName;
      cells[1].textContent = lastName;
      cells[2].textContent = user.address.city;
      cells[3].textContent = user.address.state;
      row.append(...cells);
      return row;
    });
  tbody.append(...rows);
}

function thirdVersion() {
  let rows = users
    .filter((user) => user.userType === 'person')
    .map((user) => {
      let [firstName, lastName] = user.displayName.split(' ');
      let row = document.createElement('tr');
      let template = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${user.address.city}</td>
      <td>${user.address.state}</td>
      `;
      row.innerHTML = template;
      return row;
    });
  tbody.append(...rows);
}

function fourthVersion() {
  let columnConfig = [
    {
      field: (record) => record.displayName.split(' ')[0],
      label: 'First Name',
    },
    {
      field: (record) => record.displayName.split(' ')[1],
      label: 'Last Name',
    },
    {
      field: 'address.city',
      label: 'City',
    },
    {
      field: 'address.state',
      label: 'State',
    },
  ];

  let rows = users
    .filter((user) => user.userType === 'person')
    .map((user) => {
      let row = document.createElement('tr');
      columnConfig.forEach((column) => {
        let cell = document.createElement('td');
        if (typeof column.field === 'string') {
          cell.textContent = lodashGet(user, column.field);
          // cell.textContent = user[column.field];
        } else if (typeof column.field === 'function') {
          cell.textContent = column.field(user);
        }
        row.append(cell);
      });
      return row;
    });
  tbody.append(...rows);
}
