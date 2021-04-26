import { Vehicle } from './Vehicle.js';

export class Car extends Vehicle {
  numberOfDoors = 4;

  constructor(config = {}) {
    super(config);
    this.numberOfDoors = config.numberOfDoors || this.numberOfDoors;
  }

  toString() {
    return super.toString() + ` with ${this.numberOfDoors} doors.`;
  }
}
