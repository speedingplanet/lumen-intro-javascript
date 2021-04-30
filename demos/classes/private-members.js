class Person {
  #firstName = '';

  constructor(firstName) {
    this.firstName = firstName;
  }

  get firstName() {
    return this.#firstName;
  }

  set firstName(firstName) {
    this.#firstName = firstName;
  }
}
