import _orderBy from '../../../node_modules/lodash-es/orderBy.js';
import _get from '../../../node_modules/lodash-es/get.js';

/*
Build a defaultConfig with the following properties
users, an empty array
renderTo, the document's body (there's a shortcut for this element)
renderNow, false
*/

export class UsersTable {
  constructor(config) {
    // Merge defaultConfig and config into a new object
    // Extract the users, renderTo and renderNow properties

    // Call setPeople, passing it users

    // Build the table, assign it to this.table
    // Have this.tbody point to the table body

    // Add event handlers

    this.lastSortField = '';
    this.lastSortDirection = 'asc';

    this.target = renderTo;

    // Add a condition, if renderNow is true, call this.render()
  }

  setPeople(users) {
    this.users = [...users];
    this.peopleById = {};
    this.people = this.users
      .filter((user) => user.userType === 'person')
      .map((person) => {
        let [firstName, lastName] = person.displayName.split(' ');
        let { displayName, ...updatedPerson } = {
          ...person,
          firstName,
          lastName,
        };
        this.peopleById[updatedPerson.id] = updatedPerson;
        return updatedPerson;
      });
  }

  /*
  Create buildTable()
  It should create a table, build out the thead section 
  (which you can move here from the HTML file)
  and add an empty tbody
  Add the classes table, table-hover, and table-striped
  Return the created table
  */

  addEventHandlers() {
    this.table
      .querySelector('thead>tr')
      .addEventListener('click', this.handleClickHeader);
  }

  // Be sure to ask your instructor about this
  // handleClickHeader(event) {
  handleClickHeader = (event) => {
    this.sortTable(event.target.dataset.sortField);
  };

  sortTable(sortField) {
    let sortDirection = 'asc';
    if (sortField === this.lastSortField && this.lastSortDirection === 'asc') {
      sortDirection = 'desc';
    }

    this.people = _orderBy(this.people, sortField, sortDirection);
    this.lastSortDirection = sortDirection;
    this.lastSortField = sortField;
    this.render();

    let sortHeader = this.table.querySelector(
      `th[data-sort-field="${sortField}"]`
    );
    let otherHeaders = this.table.querySelectorAll(
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

  /*
  Build highlightUsers
  It should take three arguments
  field -> the field to search on
  text -> the text to search for
  cssClass -> the highlighting class, defaulting to bg-warning

  You can use some of the code in handleFilterButton in users-table-highlight here
  */

  render(users) {
    if (users) {
      this.setPeople(users);
    }
    let rows = this.people.map((person) => {
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

    this.tbody.replaceChildren(...rows);
    this.target.replaceChildren(this.table);
    if (this.filterField && this.filterText) {
      this.highlightUsers(this.filterField, this.filterText);
    }
  }
}
