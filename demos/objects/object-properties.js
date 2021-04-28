let originalPerson = {
  firstName: 'John',
  lastName: 'Paxton',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

originalPerson.city = 'Nutley';
originalPerson.lastName = 'Castillo';

let person = {};
Object.defineProperty(person, 'firstName', {
  configurable: true, // Can I call Object.defineProperty on it again?
  enumerable: true, // Can it be enumerated?
  writable: true, // Read-only? Or read-write
});

// Either have get and/or set, OR have value as a prop descriptor
Object.defineProperty(person, 'lastName', {
  enumerable: false,
  writable: true,
  configurable: true,
  value: 'Smith',
});

Object.defineProperties(person, {
  firstName: {
    writable: true,
    enumerable: false,
  },
  lastName: {
    writable: false,
    enumerable: true,
  },
});

let defaultConfig = {
  configurable: false,
  writable: true,
  enumerable: true,
};

function makeMethodsNonEnumerable(target) {
  let keys = Object.keys(target);
  keys.forEach((key) => {
    if (typeof target[key] === 'function') {
      Object.defineProperty(target, key, {
        enumerable: false,
      });
    }
  });
}

let foo = {};

Object.preventExtensions(foo); // No new properties
Object.isExtensible(foo); // false

Object.seal(foo); // Can't reconfigure existing properties
Object.isSealed(foo); // true

Object.freeze(foo); // Can't change anything, even values
Object.isFrozen(foo); // true
