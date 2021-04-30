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

function fetchData() {
  let responsePromise = fetch('http://localhost:8000/api/zippay/v1/users/201');
  // return fetch('http://localhost:8000/api/zippay/v1/users/201');

  // promise.then() ALWAYS returns another promise
  let jsonPromise = responsePromise.then((response) => response.json());

  // jsonPromise.then((user) => console.log('Hello,', user.displayName));
  return jsonPromise;
}
