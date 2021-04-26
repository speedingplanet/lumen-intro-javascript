import { Car } from './Car.js';
import { Vehicle } from './Vehicle.js';

let honda = new Car({ make: 'Honda', model: 'Civic', numberOfDoors: 2 });
console.log('honda: ', honda);
console.log('honda: ' + honda);

let defaultCar = new Car();
console.log('defaultCar: ', defaultCar);

globalThis.honda = honda;
globalThis.Vehicle = Vehicle;
