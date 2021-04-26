// Don't do this
// let data = [1, 'one', {a: 'apple'}, new Date()];

let cities = ['Boston', 'New York', 'Chicago', 'San Francisco'];

cities.push('Natick'); // Increase size by one
let lastCity = cities.pop(); // 'Natick', decrease size by one

let firstCity = cities.shift(); // 'Boston', decrease size by one
cities.unshift(firstCity); // increase size by one

// Anywhere not at either end
let secondElement = cities.splice(1, 1); // ['New York'], decrease size by one

cities.splice(1, 0, ...secondElement); // Inserts 'New York', increase size by one

// Deleted is ['New York', 'Chicago', 'San Francisco']
// Array is now 6 element long, 'Boston' plus the added elements
let deleted = cities.splice(
  1,
  3,
  'Natick',
  'Waltham',
  'Framingham',
  'Acton',
  'Worcester'
);

// Iteration
cities.forEach((city) => console.log(city));

for (let x = 0; x < cities.length; x++) {
  console.log(cities[x]);
}

for (let city of cities) {
  console.log(city);
}

cities.indexOf('Wor');
cities.includes('Natick');

'Supercallifragilisticexpialidocious'.indexOf('e', 4);
'Supercallifragilisticexpialidocious'.includes('quiet');

cities.filter((city) => city.includes('W'));
cities.find((city) => city.includes('W'));

let citiesCopy = [...cities];
citiesCopy.sort();
cities;

let westCoastCities = ['Los Angeles', 'San Francisco', 'Portland', 'Seattle'];
[...cities, ...westCoastCities];

cities.push('', ...westCoastCities);
cities;

// Array.from(), Array.isArray();
Array.isArray(cities);

let listRef = document.getElementById('cities-list');

function renderList(cities, targetList) {
  /*
  let listItems = '';

  for (let city of cities) {
    listItems = listItems + `<li>${city}</li>`;
  }
  */

  //  targetList.innerHTML = cities.map((city) => `<li>${city}</li>`).join('\n');

  let citiesAsListItems = cities.map((city) => `<li>${city}</li>`);
  let citiesString = citiesAsListItems.join('');
  targetList.innerHTML = citiesString;
}

function updateSortLabel(sorted) {
  const sortLink = document.getElementById('sort-link');

  if (sorted) {
    sortLink.innerHTML = 'Reverse';
  } else {
    sortLink.innerHTML = 'Sort';
  }
}

renderList(cities, listRef);

const sortLink = document.getElementById('sort-link');
let sorted = false;
updateSortLabel(sorted);

sortLink.addEventListener('click', (event) => {
  event.preventDefault();
  if (sorted === false) {
    cities.sort();
  } else {
    cities.reverse();
  }
  renderList(cities, listRef);
  sorted = true;
  updateSortLabel(sorted);
});

let addCityButton = document.getElementById('add-city-button');
addCityButton.addEventListener('click', () => {
  let nextCity = document.getElementById('add-city').value;

  if (nextCity.length > 0) {
    cities.push(nextCity);
  }

  sorted = false;
  updateSortLabel(sorted);
  renderList(cities, listRef);
});

const para = document.getElementById('message-container');
listRef.addEventListener('click', function (event) {
  const listItem = event.target;
  para.hidden = false;
  event.stopPropagation();

  const span = para.querySelector('span');
  span.textContent = listItem.textContent;
  console.log(`You clicked on ${listItem.textContent}.`);
});

document.body.addEventListener('click', function () {
  para.hidden = true;
});
