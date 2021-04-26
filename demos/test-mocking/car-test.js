// Not actually a test, just a technique for mocking a private function
// A lot of running around when I could just mock the odometer service.
// Has to be a compelling case
let Car = require('./Car');

let honda = new Car('Honda', 'Civic');

function mockedGetEngine() {
  console.log('*** publicGetEngine invoking mockedGetEngine ***');
  return 'mocked engine';
}

let publicGetEngineSource = honda.publicGetEngine.toString();

mockedGetEngineSource = publicGetEngineSource.replace(
  /privateGetEngine/g,
  'mockedGetEngine'
);

console.log('honda.publicGetEngine(): ', honda.publicGetEngine());
console.log('Original publicGetEngine source: ', publicGetEngineSource);
console.log('Mocked publicGetEngine: ', mockedGetEngineSource);

// new Function([args], functionBody) only wants the body of the function
mockedGetEngineSource = mockedGetEngineSource.substring(
  mockedGetEngineSource.indexOf('{') + 1,
  mockedGetEngineSource.lastIndexOf('}') - 1
);

// Calls to new Function() create functions BOUND TO THE GLOBAL SCOPE
let mockedPublicGetEngine = new Function(mockedGetEngineSource);

// So we need this to make the mocked function available
// because new Function() creates functions on the global scope
global.mockedGetEngine = mockedGetEngine;

// Use this with jest.fn, spyOn from Jasmine, sinon.spy for Mocha and QUnit, etc.
console.log('Calling mockedPublicGetEngine: ', mockedPublicGetEngine());
