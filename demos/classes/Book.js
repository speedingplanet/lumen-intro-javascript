export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // implicitly overriding/redefining toString() from Object
  toString() {
    return `${this.title} by ${this.author}`;
  }
}

let defaultConfig = {
  title: 'Default Title',
  author: 'Default Author',
  edition: 1,
  publisher: 'Paxton Press',
  pages: 0,
  format: 'hardcover',
  pricing: 0,
};

class BiggerBook {
  /*
  constructor(title, author, edition, publisher, pages, format, pricing) {

  }
  */

  /*
  // Can't assign to 'this' directly
  constructor(config = {}) {
    this = { ...this, ...defaultConfig, ...config };
  }
  */

  /*
  // Has some shortcomings, can override methods
  constructor(config = {}) {
    Object.assign(this, defaultConfig, config);
  }
  */

  /*
  constructor(config = {}) {
    let mergedConfiguration = { ...defaultConfig, ...config };
    for (let key in defaultConfig) {
      // this.title = mergedConfiguration.title, etc....
      this[key] = mergedConfiguration[key];
    }
  }
  */

  constructor(config = {}) {
    let { title, author, publisher } = { ...defaultConfig, ...config };
    this.title = title;
    this.author = author;
    this.publisher = publisher;
  }

  getTitle() {
    return this.title;
  }

  getAuthor = () => {
    return this.author;
  };

  toString() {
    return `${this.title} by ${this.author}`;
  }
}

let b = new BiggerBook({
  title: 'Overridden!',
  toString: function () {
    return 'I totally overrode your method, dude.';
  },
});
