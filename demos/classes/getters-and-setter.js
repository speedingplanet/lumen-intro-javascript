class Book {
  constructor(title) {
    // this._title = title;
    Object.defineProperty(this, '_title', {
      enumerable: false,
      writable: false,
      configurable: false,
      value: title, // or assign directly to this._title above
    });
  }

  get title() {
    return this._title;
  }

  /*
  // Uncomment to make title writable
  set title(title) {
    this._title = title;
  }
  */
}
