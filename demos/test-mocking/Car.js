// Car is a class with three versions of private functions

// Extract this to a separate file, mock the file with jest.mock or similar
function getRadioService() {
  let station = 'WGBH';
  return {
    getStation() {
      return station;
    },
    tune(nextStation) {
      station = nextStation;
    },
  };
}

function Car(make, model) {
  this.make = make;
  this.model = model;
  this.radio = getRadioService();
}

Car.prototype.drive = function (distance) {
  this.mileage = distance;
};

Car.prototype.toString = function () {
  return `${this.make} ${this.model} [${this.mileage} miles]`;
};

// Again, this could be extracted, but this example is used
// for the Object.defineProperty version below
const { getOdometer, incrementOdometer } = (function () {
  let odometer = 0;
  return {
    incrementOdometer(amount) {
      if (amount >= 0) {
        odometer += amount;
        return odometer;
      }
    },
    getOdometer() {
      return odometer;
    },
  };
})();

// Use Object.defineProperty to redefine the set() method
// to talk to a mocked version of the private method
Object.defineProperty(Car, 'mileage', {
  enumerable: true,
  get() {
    return getOdometer();
  },
  set(amount) {
    incrementOdometer(amount);
  },
});

// The toughest case:
function privateGetEngine() {
  return 'private engine';
}

Car.prototype.publicGetEngine = function () {
  console.log('publicGetEngine invoking privateGetEngine: ');

  return privateGetEngine();
};

module.exports = Car;
