const person = {
  firstName: 'John',
  lastName: 'Paxton',
  city: 'Nutley',
  state: 'NJ',
  getState() {
    return this.state;
  },
  getCity: function () {
    return this.city;
  },
  add: (x, y) => x + y,
};

const { firstName, lastName } = person;
console.log(firstName); // John

let { city } = person;

let { firstName: f, lastName: l } = person;
console.log(f); // John

let { state, ...shallowCopy } = person;
console.log(state); // NJ

function printName({
  firstName = 'default FirstName',
  lastName = 'default LastName',
} = {}) {
  console.log(firstName + ' ' + lastName);
}

printName(person);

let shallowCopyOfPerson = { ...person };

let employee = {
  employeeId: 1,
  department: 'IT',
  job: 'Programmer',
  firstName: 'Bob',
};

let salaryInfo = {
  salary: 50000,
};

let mergedEmployee = { ...person, ...employee };
let assignedLiteral = Object.assign({}, person, employee);

// mergedEmployee = { ...mergedEmployee, ...salaryInfo };
Object.assign(mergedEmployee, salaryInfo);
