console.log('before');
setTimeout(() => console.log('after 3 seconds'), 3000);
// setInterval(() => console.log('after 3 seconds'), 3000);
console.log('after');

/*
// Blocking code
for (let x = 0; x < 1_000_000_000_000_000; x++) {
  // Doesn't matter
}
*/

let timerId = setTimeout(() => {
  // do some stuff....
  return 10;
}, 1000);

// setTimeout(() => clearTimeout(timerId), 250);
clearTimeout(timerId);

function executor(resolve, reject) {
  // setTimeout(() => (Date.now() % 2 ? resolve(10) : reject('error!')), 1000);
  setTimeout(() => resolve(10), 1000);
}

function handlePromiseSuccess(results) {
  console.log('The promise resolved with the value', results);
}

function handlePromiseFailure(error) {
  console.error('The promise failed (rejected) with the value', error);
}

let p = new Promise(executor);
// p.then(handlePromiseSuccess, handlePromiseFailure);
p.then(handlePromiseSuccess);
p.catch(handlePromiseFailure); // p.then(null, handlePromiseFailure)

p.then((results) => results * 10)
  .then(
    (results) => results / 5,
    (error) => console.error('Something went wrong:', error)
  )
  .then((results) => results + Math.PI)
  .then((results) => console.log('results:', results));

function returnsNothing() {}
function returnsSomething() {
  return 1;
}

// throw an error, or return a rejected Promise, guarantees a reject
function throwsError() {
  throw new Error('ARGH');
}
function returnRejected() {
  return Promise.reject('rejected');
}

p.then(returnsSomething); // next .then(): resolve
p.then(returnsNothing) // next .then(): resolve
  .then(() => console.log('empty success'));
p.then(throwsError) // next .then(): reject
  .then(
    () => console.log('Never runs'),
    (error) => console.log('Problem:', error)
  );
p.then(returnRejected) // next .then(): reject?
  .then(
    () => console.log('Never runs'),
    (error) => console.log('Rejected promise:', error)
  );

// Bouncing back
p.then((results) => Promise.reject('awwww')) // Next promise fails/rejects
  .then(
    () => 'never runs',
    (error) => {
      return 10;
    }
  )
  .then(
    (laterResults) => {
      console.log('Success again!', laterResults);
    },
    () => 'never runs'
  );

// Bouncing back accidentally?
p.then((results) => {
  throw new Error('blah');
})
  .catch((error) => {
    console.log('The error was:', error);
  })
  .then(
    () => console.log('success again?'),
    () => console.log('Continuing to fail')
  );

p.then((results) => results * 10) // a
  .then((results) => results / 5) // b
  .then((results) => results + Math.PI) // c
  .then((results) => console.log('results:', results)) // d
  .catch((error) => {
    console.error(error);
    return Promise.reject(error);
  });
