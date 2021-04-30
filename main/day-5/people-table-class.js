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

let p1 = fetch('http://localhost:8000/api/zippay/v1/users/');

let p2 = p1.then((response) => {
  console.log('p1:response', response);
  return response.json();
});
let p3 = p2.then((users) => {
  console.log('p2:users', users);
  let people = users
    .filter((user) => user.userType === 'person')
    .map((person) => {
      let { displayName, address, id } = person;
      let [firstName, lastName] = displayName.split(' ');
      return { firstName, lastName, displayName, address, id };
    });
  return people;
});
p3.then((people) => {
  console.log('p3: people', people);
  let table = new PeopleTable({
    people,
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
});
