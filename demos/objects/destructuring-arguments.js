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
