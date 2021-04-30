document
  .querySelector('button.btn.btn-primary')
  .addEventListener('click', () => {
    // fetchData();
    let foo = fetchData();
    foo.then((user) => {
      document.getElementById(
        'greeting'
      ).textContent = `Hello, ${user.displayName}`;
    });
  });

document.querySelector('button.btn-warning').addEventListener('click', () => {
  let userPromise = fetchDataWithBadResponse();
  userPromise
    .then((user) => console.log('user:', user))
    .catch((error) => console.error('Request error:', error));
});

function fetchData() {
  let responsePromise = fetch('http://localhost:8000/api/zippay/v1/users/201');
  // return fetch('http://localhost:8000/api/zippay/v1/users/201');

  // promise.then() ALWAYS returns another promise
  let jsonPromise = responsePromise.then((response) => response.json());

  // jsonPromise.then((user) => console.log('Hello,', user.displayName));
  return jsonPromise;
}

function fetchDataTerse() {
  return fetch(
    'http://localhost:8000/api/zippay/v1/users/201'
  ).then((response) => response.json());
}

function fetchDataWithBadResponse() {
  return fetch('http://localhost:8000/api/zippay/v1/users/501').then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject({
          message: 'HTTP error',
          response,
          status: response.status,
          statusText: response.statusText,
        });
      }
    }
  );
}
