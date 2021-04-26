module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: [ '@babel' ],
  parser: '@babel/eslint-parser',

  extends: [ 'eslint:recommended' ],
  rules: {
    'prefer-const': 'off',
    semi: [ 'error', 'always' ],
  },
  ignorePatterns: [ 'node_modules' ],
};
