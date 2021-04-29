function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

let me = new Person('John', 'Paxton');
let me2 = Person('John', 'Paxton');

class PersonAsClass {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let meInstance = new PersonAsClass('John', 'Paxton');
