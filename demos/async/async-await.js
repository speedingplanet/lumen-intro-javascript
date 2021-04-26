function getUsersPromise() {
  let baseUrl = 'http://localhost:8000/api/zippay/v1/users/';

  let responsePromise = fetch(baseUrl);
  let resultsPromise = responsePromise.then(function (response) {
    if (response.ok) {
      return response.json();
    }
    // Hope that that response is 2xx
    // Hope that there are no errors
  });

  return resultsPromise;
}

getUsersPromise().then(function (users) {
  // console.log(`There are ${users.length} users.`);
});

async function getUsersAsync() {
  let baseUrl = 'http://localhost:8001/api/zippay/v1/users/';
  let users = [];

  try {
    let response = await fetch(baseUrl); // 2 (yield)
    // 5
    if (response.ok) {
      users = await response.json();
    }
  } catch (err) {
    console.log('getUsersAsync: problems: ', err);
    // return Promise.reject(err);
    throw err;
  }

  console.log('getUsersAsync(): still running');
  return users;
}

async function main() {
  let users;
  try {
    // let users = await getUsersAsync();
    users = await getUsersAsync();
    // let numbers = await doSomething();
  } catch (err) {
    console.error('main: problems: ', err);
  }
  // console.log('Awaited numbers: ', numbers);
  // console.log(`(async-await) There are ${users.length} users.`);
  console.log(`(async-await) Users: `, users);
}

function doSomething() {
  for (let x = 0; x < 1000; x++) {}
  return [1, 2, 3, 4, 5, 6];
  // 4
}

main(); // 1
doSomething(); // 3
// ....
