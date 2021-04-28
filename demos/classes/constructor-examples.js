class BookContructorMulti {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }
}

const defaultConfig = {
  author: 'Default author',
  title: 'Default title',
};
class BookConstructorObject {
  constructor(config = {}) {
    Object.assign(this, defaultConfig, config);
  }
}

class BookConstructorDefensive {
  constructor(config = {}) {
    let safeConfig = { ...config };
    let safeKeys = Object.keys(defaultConfig);
    for (let key in safeConfig) {
      if (!safeKeys.includes(key)) {
        delete safeConfig[key];
      }
    }
    Object.assign(this, defaultConfig, safeConfig);
  }
}

// newer syntax, may have to process with Babel for some browsers
class BookConstructorInstanceFields {
  author = '';
  title = '';
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }
}
