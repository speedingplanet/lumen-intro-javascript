const Car = require('./Car');

let honda = new Car('Honda', 'Civic');
let ford = new Car('Ford', 'Mustang');

honda.drive(50);
ford.drive(100);

console.log('Car prototype: ', Car.prototype);
console.log('honda.__proto__: ', honda.__proto__);

console.log(honda.toString());
console.log(ford.toString());

console.log(
  'Car mileage descriptor: ',
  Object.getOwnPropertyDescriptor(Car, 'mileage')
);

console.log('honda.publicGetEngine(): ', honda.publicGetEngine());
