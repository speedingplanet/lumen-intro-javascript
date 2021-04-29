export class Vehicle {
  static nextVin = 1;

  constructor(make = 'Default make', model = 'Default model') {
    this.make = make;
    this.model = model;
    this.vin = Vehicle.nextVin++;
  }

  getMake() {
    return this.make;
  }

  getModel() {
    return this.model;
  }

  toString() {
    return `${this.make} ${this.model}`;
  }
}

console.log(Vehicle.nextVin);
let v1 = new Vehicle();
console.log('Vehicle details: ' + v1);
console.log('Vehicle details: ', v1.toString());

v1 + '' === v1.toString(); // true
v1 == 'Default make Default model'; // false
v1.toString() == 'Default make Default model'; // true

export class Car extends Vehicle {
  constructor(make, model, color, numDoors) {
    super(make, model);
    this.color = color;
    this.numDoors = numDoors;
  }

  getMake() {
    return "This car's make is " + this.make;
  }

  getColor() {
    return this.color;
  }

  toString() {
    return `A ${this.color} ${super.toString()}`;
  }
}
