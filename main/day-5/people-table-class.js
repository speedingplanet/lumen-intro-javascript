import { PeopleTable } from './PeopleTable.js';

/*
 Call fetch with the following url: http://localhost:8000/api/zippay/v1/users/
 Fetch returns a promise (p1), parse p1's results as JSON and return them
 At this point, you have a promise (p2) wrapped around an array of users
 Log the array of users to the console to see if you have the right data

 Filter the users to get rid of users who are not people
 Log one or more of the people to the console to see if you have the right data
 return the people array to the next promise (p3)

 In the last .then (on p3), take the people array, use it to build PeopleTable
 Don't forget to call table.render()
*/

let table = new PeopleTable({
  renderTo: document.getElementById('table-target'),
});
table.render();

document
  .querySelector('#filter-button')
  .addEventListener('click', handleFilterButton);

function handleFilterButton() {
  let filterField = document.getElementById('filter-field').value;
  let filterText = document.getElementById('filter-text').value;

  table.highlightUsers(filterField, filterText);
}
